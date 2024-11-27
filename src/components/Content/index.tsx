import { SafeAreaViewProps } from 'react-native-safe-area-context'
import { Container } from './styles'

type Props = SafeAreaViewProps

export function Content(props: Props) {
  return <Container {...props} />
}
