import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Text } from './styles'
import { Feather } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  label: string
  icon?: keyof typeof Feather.glyphMap
}

export function Button({ icon, label, ...props }: Props) {
  return (
    <Container {...props}>
      {icon && <Icon name={icon} />}
      <Text>{label}</Text>
    </Container>
  )
}
