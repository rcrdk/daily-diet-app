import { useNavigation } from '@react-navigation/native'
import { Container, Icon, Percentage, Text } from './styles'

export function DietCardStatus() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('stats')
  }

  return (
    <Container isOnDiet={false} onPress={handleNavigation}>
      <Icon isOnDiet={false} />
      <Percentage>25.22%</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  )
}
