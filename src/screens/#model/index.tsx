import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, Content } from './styles'
import { Heading } from '@components/Heading'

export function NewMeal() {
  return (
    <Container>
      <SafeAreaView edges={['top', 'left', 'right']}>
        <Heading title="Nova refeição" backTo="meals" />
      </SafeAreaView>

      <Content edges={['bottom', 'left', 'right']}></Content>
    </Container>
  )
}
