import type { MealsGroupedDTO } from '@dtos/MealDTO'
import { groupBy } from '@utils/group-by'

import { getAllMeals } from './getAllMeals'

export async function getMealsGrouped() {
  try {
    const meals = await getAllMeals()

    const groupMealsByDate = groupBy(meals, 'date')

    const formattedMealsGroup: MealsGroupedDTO[] = Object.entries(
      groupMealsByDate,
    ).map((item) => {
      return {
        title: item[0]!,
        data: item[1]!.sort((a, b) => b.hour.localeCompare(a.hour)),
      }
    })

    return formattedMealsGroup
  } catch (error) {
    throw error
  }
}
