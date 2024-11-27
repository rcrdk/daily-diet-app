import { useNavigation } from '@react-navigation/native'
import { Container, Image, Text, Title } from './styles'
import { Button } from '@components/Button'
import emptyImage from '@assets/empty.png'

export function ListEmpty() {
  const navigation = useNavigation()

  function handleCreateNewMeal() {
    navigation.navigate('create')
  }

  return (
    <Container>
      <Image source={emptyImage} />
      <Title>Comece agora mesmo!</Title>
      <Text>
        Você ainda não possui registros de refeições da sua dieta, cadastre a
        primeira agora mesmo:
      </Text>

      <Button
        label="Nova refeição"
        icon="plus"
        onPress={handleCreateNewMeal}
        style={{ alignSelf: 'stretch' }}
      />
    </Container>
  )
}
