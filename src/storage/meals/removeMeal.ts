import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS } from '@storage/config'

import { getAllMeals } from './getAllMeals'

export async function removeMeal(id: string) {
  try {
    const meals = await getAllMeals()
    const mealsActive = meals.filter((meal) => meal.id !== id)

    AsyncStorage.setItem(MEALS, JSON.stringify(mealsActive))
  } catch (error) {
    throw error
  }
}
