import { Container, StatCardStyleThemeColor, Text, Title } from './styles'

type Props = {
  number: string | number
  text: string
  themeColor?: StatCardStyleThemeColor
}

export function StatCard({ number, text, themeColor = 'default' }: Props) {
  return (
    <Container themeColor={themeColor}>
      <Title>{number}</Title>
      <Text>{text}</Text>
    </Container>
  )
}
