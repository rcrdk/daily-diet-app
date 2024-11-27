import { BackButton, BackIcon, Container, Title } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  title: string
  onBackNavigation: () => void
}

export function Heading({ title, onBackNavigation }: Props) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Container>
        <BackButton onPress={onBackNavigation}>
          <BackIcon />
        </BackButton>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  )
}
