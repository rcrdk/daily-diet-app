import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Title } from './styles'

type Props = {
  title: string
  backTo: keyof ReactNavigation.RootParamList
}

export function Heading({ title, backTo }: Props) {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate(backTo)
  }

  return (
    <Container>
      <BackButton onPress={handleNavigation}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  )
}
