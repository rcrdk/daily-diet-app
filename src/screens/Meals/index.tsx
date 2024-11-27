import { Container, ListHeader, Title } from './styles'
import { Header } from '@components/Header'
import { DietCardStatus } from '@components/DietCardStatus'
import { Alert, SectionList } from 'react-native'
import { useCallback, useState } from 'react'
import { MealsGroupedDTO } from '@dtos/MealDTO'
import { MealItem } from '@components/MealItem'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ListEmpty } from '@components/ListEmpty'
import { getMealsGrouped } from '@storage/meals/getMealsGrouped'

export function Meals() {
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
    // setIsLoading(true)

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
      // setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

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
        keyExtractor={meal => meal.id}
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
