import { MealDTO } from '@dtos/MealDTO'

export function isValidMeal(meal: Optional<MealDTO, 'id' | 'onDiet'>) {
  if (meal.name.trim() === '') return false
  if (meal.description.trim() === '') return false
  if (meal.date.trim() === '') return false
  if (meal.hour.trim() === '') return false
  if (meal.onDiet === undefined) return false

  return true
}

export function mealAlreadyExists(newMeal: MealDTO, currentMeals: MealDTO[]) {
  const checkIfExists = currentMeals.find(
    meal => meal.date === newMeal.date && meal.hour === newMeal.hour,
  )

  if (newMeal.id === checkIfExists?.id) {
    return false
  }

  return !!checkIfExists
}
