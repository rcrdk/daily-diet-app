import { Container, Image } from './styles'
import brandImage from '@assets/brand.png'

export function Header() {
  return (
    <Container>
      <Image source={brandImage} />
    </Container>
  )
}
