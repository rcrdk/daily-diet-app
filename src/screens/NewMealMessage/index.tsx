import onDietImage from '@assets/in.png'
import outDietImage from '@assets/not.png'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container, Image, Strong, Text, Title } from './styles'

type RouteParams = {
  isOnDiet: 'true' | 'false'
}

export function NewMealMessage() {
  const router = useRoute()
  const navigation = useNavigation()

  const { isOnDiet } = router.params as RouteParams

  function handleNavigation() {
    navigation.navigate('meals')
  }

  return (
    <Container>
      {isOnDiet === 'true' && (
        <>
          <Title isOnDiet>Continue assim!</Title>
          <Text>
            Você continua <Strong>dentro da dieta</Strong>. Muito bem!
          </Text>
          <Image source={onDietImage} />
        </>
      )}

      {isOnDiet === 'false' && (
        <>
          <Title>Que pena!</Title>
          <Text>
            Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
            esforçando e não desista!
          </Text>
          <Image source={outDietImage} />
        </>
      )}

      <Button label="Ir para a página inicial" onPress={handleNavigation} />
    </Container>
  )
}
