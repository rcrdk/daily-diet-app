import { Container, ListHeader, Title } from './styles'
import { Header } from '@components/Header'
import { DietCardStatus } from '@components/DietCardStatus'
import { SectionList } from 'react-native'
import { useState } from 'react'
import { MealsGroupedDTO } from '@dtos/MealDTO'
import { MealItem } from '@components/MealItem'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ListEmpty } from '@components/ListEmpty'

export function Meals() {
  const [meals, setMeals] = useState<MealsGroupedDTO[]>([
    {
      title: '06.11.2025',
      data: [
        {
          id: '1',
          name: 'Sopa',
          description: 'Some description',
          date: '06/11/2025',
          hour: '19:00',
          onDiet: true,
        },
        {
          id: '2',
          name: 'Pizza',
          description: 'Some description',
          date: '06/11/2025',
          hour: '12:00',
          onDiet: false,
        },
        {
          id: '3',
          name: 'Hamburguer',
          description: 'Some description',
          date: '06/11/2025',
          hour: '11:00',
          onDiet: false,
        },
      ],
    },
    {
      title: '05.11.2025',
      data: [
        {
          id: '4',
          name: 'Some oversized text to truncate but needs more words to do so',
          description: 'Some description',
          date: '06/11/2025',
          hour: '19:00',
          onDiet: true,
        },
      ],
    },
    {
      title: '04.11.2025',
      data: [
        {
          id: '5',
          name: 'Sopa',
          description: 'Some description',
          date: '06/11/2025',
          hour: '19:00',
          onDiet: true,
        },
      ],
    },
  ])

  const { SPACE } = useTheme()
  const navigation = useNavigation()

  function handleCreateNewMeal() {
    navigation.navigate('create')
  }

  function handleShowMealDetails(id: string) {
    navigation.navigate('details', { id })
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
        keyExtractor={meal => meal.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onPress={() => handleShowMealDetails(item.id)}
            key={item.id}
          />
        )}
        renderSectionHeader={({ section }) => (
          <ListHeader>{section.title}</ListHeader>
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
