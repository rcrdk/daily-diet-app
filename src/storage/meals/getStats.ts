import type { StatsDTO } from '@dtos/StatsDTO'

import { getAllMeals } from './getAllMeals'

export async function getStats(): Promise<StatsDTO> {
  const meals = await getAllMeals()

  const mealsCount = meals.length
  const onDietCount = meals.filter((item) => !!item.onDiet).length
  const offDietCount = meals.filter((item) => !item.onDiet).length

  const calcAverage = Number((onDietCount * 100) / mealsCount)
  const average = `${calcAverage.toFixed(2).replace('.', ',')}%`

  const { bestSequenceInDiet } = meals.reduce(
    (acc, meal) => {
      if (meal.onDiet) {
        acc.currentSequence += 1
      } else {
        acc.currentSequence = 0
      }

      if (acc.currentSequence > acc.bestSequenceInDiet) {
        acc.bestSequenceInDiet = acc.currentSequence
      }

      return acc
    },
    { bestSequenceInDiet: 0, currentSequence: 0 },
  )

  return {
    average,
    isOnDiet: calcAverage >= 70,
    bestSequence: bestSequenceInDiet,
    mealsCount,
    onDietCount,
    offDietCount,
  }
}
