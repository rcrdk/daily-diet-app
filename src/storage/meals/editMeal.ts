import { MealDTO } from '@dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS } from '@storage/config'
import { AppError } from '@utils/app-error'
import { isValidMeal, mealAlreadyExists } from '@utils/validate-meal'
import { getAllMeals } from './getAllMeals'

export async function editMeal(meal: MealDTO) {
  try {
    const storedMeals = await getAllMeals()

    const checkValidMeal = isValidMeal(meal)
    const doesMealAlreadyExists = mealAlreadyExists(meal, storedMeals)

    if (!checkValidMeal) {
      throw new AppError('Informe todas as informações da refeição.')
    }

    if (doesMealAlreadyExists) {
      throw new AppError(
        'Uma refeição já foi registrada na data e horário selecionados.',
      )
    }

    const updatedMeal = storedMeals.map(item => {
      if (item.id === meal.id) {
        return meal
      }

      return item
    })

    await AsyncStorage.setItem(MEALS, JSON.stringify(updatedMeal))
  } catch (error) {
    throw error
  }
}
