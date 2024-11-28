import type { TextProps } from 'react-native'

import { Container } from './styles'

type Props = TextProps

export function Label(props: Props) {
  return <Container {...props} />
}
