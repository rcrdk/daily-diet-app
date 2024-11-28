import brandImage from '@assets/brand.png'

import { Container, Image } from './styles'

export function Header() {
  return (
    <Container>
      <Image source={brandImage} />
    </Container>
  )
}
