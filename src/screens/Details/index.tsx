import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'
import { Heading } from '@components/Heading'
import { Label } from '@components/Label'
import { Loading } from '@components/Loading'
import type { MealDTO } from '@dtos/MealDTO'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { getMeal } from '@storage/meals/getMeal'
import { removeMeal } from '@storage/meals/removeMeal'
import { AppError } from '@utils/app-error'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { ActionButtons, Container, Text, Title } from './styles'

type RouteParams = {
  id: string
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<MealDTO>()

  const navigation = useNavigation()

  const { params } = useRoute()
  const { id } = params as RouteParams

  function handleEditMealNavigation() {
    navigation.navigate('edit', { id })
  }

  async function onRemoveMeal() {
    try {
      await removeMeal(id)

      navigation.navigate('meals')
    } catch (error) {
      Alert.alert(
        'Refeição',
        'Não foi possível remover refeição. Tente novamente mas tarde.',
      )
      console.error(error)
    }
  }

  function handleRemoveMealNavigation() {
    Alert.alert(
      'Remover refeição',
      'Deseja realmente excluir o registro da refeição? ',
      [
        {
          style: 'cancel',
          text: 'Cancelar',
        },
        {
          style: 'destructive',
          text: 'Remover',
          onPress: onRemoveMeal,
        },
      ],
    )
  }

  async function fetchMeal() {
    try {
      setIsLoading(true)
      const data = await getMeal(id)
      setMeal(data)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        Alert.alert(
          'Refeição',
          'Não foi possível ver os detalhes da refeição. Tente novamente mas tarde.',
        )
        console.error(error)
      }
      navigation.goBack()
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  )

  return (
    <Container isOnDiet={meal?.onDiet}>
      <Heading title="Refeição" />

      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ContentScrollable>
              <Title>{meal?.name}</Title>
              <Text>{meal?.description}</Text>

              <Label>Data e hora:</Label>
              <Text>
                {meal?.date} às {meal?.hour}h
              </Text>

              {meal?.onDiet ? (
                <Badge label="dentro da dieta" color="green" />
              ) : (
                <Badge label="fora da dieta" color="red" />
              )}
            </ContentScrollable>

            <ActionButtons>
              <Button
                label="Editar refeição"
                icon="edit-3"
                onPress={handleEditMealNavigation}
              />

              <Button
                label="Remover refeição"
                icon="trash-2"
                mode="outline"
                onPress={handleRemoveMealNavigation}
              />
            </ActionButtons>
          </>
        )}
      </Content>
    </Container>
  )
}
