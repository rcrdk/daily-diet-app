import type { Feather } from '@expo/vector-icons'
import type { TouchableOpacityProps } from 'react-native'

import type { ButtonStyleMode } from './styles'
import { Container, Icon, Text } from './styles'

type Props = TouchableOpacityProps & {
  label: string
  mode?: ButtonStyleMode
  icon?: keyof typeof Feather.glyphMap
}

export function Button({ icon, label, mode = 'filled', ...props }: Props) {
  return (
    <Container mode={mode} {...props}>
      {icon && <Icon mode={mode} name={icon} />}
      <Text mode={mode}>{label}</Text>
    </Container>
  )
}
