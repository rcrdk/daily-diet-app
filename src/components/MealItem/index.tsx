import { MealDTO } from '@dtos/MealDTO'
import { Container, Hours, Name, Separator, Status } from './styles'
import { TouchableOpacityProps } from 'react-native'

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
