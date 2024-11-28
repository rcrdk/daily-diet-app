import type { TextInputProps } from 'react-native'

import { Container } from './styles'

type Props = TextInputProps

export function Input(props: Props) {
  return <Container {...props} />
}
