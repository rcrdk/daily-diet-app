import type { ScrollViewProps } from 'react-native'

import { Container } from './styles'

type Props = ScrollViewProps

export function ContentScrollable(props: Props) {
  return <Container {...props} />
}
