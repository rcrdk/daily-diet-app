import { Heading } from '@components/Heading'
import { ActionButtons, Container, Text, Title } from './styles'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { useState } from 'react'
import { MealDTO } from '@dtos/MealDTO'
import { Badge } from '@components/Badge'
import { Alert } from 'react-native'

type RouteParams = {
  id: string
}

export function Details() {
  const [meal, setMeal] = useState<MealDTO>({
    id: 'id',
    name: 'Sanduíche',
    description:
      'Sanduíche de pão integral com atum e salada de alface e tomate',
    date: '22/10/2024',
    hour: '12:00',
    onDiet: true,
  })

  const navigation = useNavigation()

  const { params } = useRoute()
  const { id } = params as RouteParams

  function handleEditMealNavigation() {
    navigation.navigate('edit', { id })
  }

  async function onRemoveMeal() {
    try {
      navigation.navigate('meals')
    } catch (error) {}
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

  return (
    <Container isOnDiet={meal.onDiet}>
      <Heading title="Refeição" />

      <Content>
        <ContentScrollable>
          <Title>{meal.name}</Title>
          <Text>{meal.description}</Text>

          <Label>Data e hora:</Label>
          <Text>
            {meal.date} às {meal.hour}h
          </Text>

          {meal.onDiet ? (
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
      </Content>
    </Container>
  )
}
