import type { ViewProps } from 'react-native'

import { Container } from './styles'

type Props = ViewProps

export function InputGroup(props: Props) {
  return <Container {...props} />
}
