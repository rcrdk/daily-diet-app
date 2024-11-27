import { MealDTO } from '@dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS } from '@storage/config'
import { AppError } from '@utils/app-error'
import { isValidMeal, mealAlreadyExists } from '@utils/validate-meal'
import { uuid } from 'expo-modules-core'
import { getAllMeals } from './getAllMeals'

export async function createMeal(meal: Optional<MealDTO, 'id' | 'onDiet'>) {
  try {
    const storedMeals = await getAllMeals()

    const newMeal: MealDTO = {
      id: uuid.v4(),
      onDiet: meal.onDiet!,
      ...meal,
    }

    const checkValidMeal = isValidMeal(meal)
    const doesMealAlreadyExists = mealAlreadyExists(newMeal, storedMeals)

    if (!checkValidMeal) {
      throw new AppError('Informe todas as informações da refeição.')
    }

    if (doesMealAlreadyExists) {
      throw new AppError(
        'Uma refeição já foi registrada na data e horário selecionados.',
      )
    }

    const storage = [...storedMeals, newMeal]

    await AsyncStorage.setItem(MEALS, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
