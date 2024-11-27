import { AppError } from '@utils/app-error'
import { getAllMeals } from './getAllMeals'

export async function getMeal(id: string) {
  try {
    const meals = await getAllMeals()
    const meal = meals.find(meal => meal.id === id)

    if (!meal) {
      throw new AppError(
        'A refeição que tentou acessar não foi encontrada. Tente novamente mais tarde.',
      )
    }

    return meal
  } catch (error) {
    throw error
  }
}
