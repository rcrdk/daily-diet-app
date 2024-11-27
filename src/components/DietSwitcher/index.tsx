import { Container, DietSwitcherStyleThemeColor, Label, Marker } from './styles'

type Props = {
  label: string
  color: DietSwitcherStyleThemeColor
  isActive?: boolean
  onSelectOption: () => void
}

export function DietSwitcher({
  label,
  color,
  isActive,
  onSelectOption,
}: Props) {
  return (
    <Container themeColor={color} isActive={isActive} onPress={onSelectOption}>
      <Marker themeColor={color} />
      <Label>{label}</Label>
    </Container>
  )
}
