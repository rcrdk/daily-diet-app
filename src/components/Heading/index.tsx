import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Title } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  title: string
  onBackNavigation?: () => void
}

export function Heading({ title, onBackNavigation }: Props) {
  const navigation = useNavigation()

  function handleBackNavigationFallback() {
    navigation.navigate('meals')
  }

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Container>
        <BackButton onPress={onBackNavigation ?? handleBackNavigationFallback}>
          <BackIcon />
        </BackButton>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  )
}
