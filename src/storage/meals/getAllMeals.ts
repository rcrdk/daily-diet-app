import type { MealDTO } from '@dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS } from '@storage/config'

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS)
    const meals: MealDTO[] = storage ? JSON.parse(storage) : []
    const mealsSorted = meals.sort((a, b) => {
      const dateOne = a.date.split('/').reverse().join('-')
      const dateTwo = b.date.split('/').reverse().join('-')
      return new Date(dateOne).getTime() + new Date(dateTwo).getTime()
    })

    return mealsSorted
  } catch (error) {
    throw error
  }
}
