export type MealDTO = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  onDiet: boolean
}

export type MealsGroupedDTO = {
  title: string
  data: MealDTO[]
}
