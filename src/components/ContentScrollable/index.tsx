import { Container } from './styles'
import { ScrollViewProps } from 'react-native'

type Props = ScrollViewProps

export function ContentScrollable(props: Props) {
  return <Container {...props} />
}
