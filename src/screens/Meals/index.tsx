import { Button } from '@components/Button'
import { DietCardStatus } from '@components/DietCardStatus'
import { Header } from '@components/Header'
import { ListEmpty } from '@components/ListEmpty'
import { Loading } from '@components/Loading'
import { MealItem } from '@components/MealItem'
import type { MealsGroupedDTO } from '@dtos/MealDTO'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMealsGrouped } from '@storage/meals/getMealsGrouped'
import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, ListHeader, Title } from './styles'

export function Meals() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealsGroupedDTO[]>([])

  const { SPACE } = useTheme()
  const navigation = useNavigation()

  function handleCreateNewMeal() {
    navigation.navigate('create')
  }

  function handleShowMealDetails(id: string) {
    navigation.navigate('details', { id })
  }

  async function fetchMeals() {
    setIsLoading(true)

    try {
      const data = await getMealsGrouped()
      setMeals(data)
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Ocorreu um erro',
        'Houve um erro ao tentar carregar as refeições. Tente novamente mais tarde.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container edges={['top', 'left', 'right']}>
      <Header />

      {meals.length > 0 && (
        <>
          <DietCardStatus />

          <Title>Refeições</Title>
          <Button
            label="Nova refeição"
            icon="plus"
            onPress={handleCreateNewMeal}
          />
        </>
      )}

      <SectionList
        sections={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onPress={() => handleShowMealDetails(item.id)}
            key={item.id}
          />
        )}
        renderSectionHeader={({ section }) => (
          <ListHeader>{section.title.replaceAll('/', '.')}</ListHeader>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: SPACE.Y_ITEM,
          paddingBottom: SPACE.Y_OVERFLOW,
          flex: meals.length === 0 ? 1 : 0,
        }}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </Container>
  )
}
