import { BadgeStyleThemeColor, Container, Label, Marker } from './styles'

type Props = {
  label: string
  color: BadgeStyleThemeColor
}

export function Badge({ label, color }: Props) {
  return (
    <Container>
      <Marker themeColor={color} />
      <Label>{label}</Label>
    </Container>
  )
}
