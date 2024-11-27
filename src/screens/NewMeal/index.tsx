import { Container } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Content } from '@components/Content'

import { ContentScrollable } from '@components/ContentScrollable'

export function NewMeal() {
  const [isOnDiet, setOnDiet] = useState<'true' | 'false'>()

  const navigation = useNavigation()

  function handleChangeOnDiet() {
    setOnDiet(prev => (prev === 'true' ? 'false' : 'true'))
  }

  function handleBackNavigation() {
    navigation.navigate('meals')
  }

  function handleCreateNewMeal() {
    if (!isOnDiet) return

    navigation.navigate('created', { isOnDiet })
  }

  return (
    <Container>
      <Heading title="Nova refeição" onBackNavigation={handleBackNavigation} />

      <Content>
        <ContentScrollable></ContentScrollable>

        <Button label="Cadastrar refeição" onPress={handleCreateNewMeal} />
      </Content>
    </Container>
  )
}
