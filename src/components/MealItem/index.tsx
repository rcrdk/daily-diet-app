import type { MealDTO } from '@dtos/MealDTO'
import type { TouchableOpacityProps } from 'react-native'

import { Container, Hours, Name, Separator, Status } from './styles'

type Props = TouchableOpacityProps & {
  meal: MealDTO
}

export function MealItem({ meal, ...props }: Props) {
  return (
    <Container {...props}>
      <Hours>{meal.hour}</Hours>
      <Separator />
      <Name>{meal.name}</Name>
      <Status isOnDiet={meal.onDiet} />
    </Container>
  )
}
