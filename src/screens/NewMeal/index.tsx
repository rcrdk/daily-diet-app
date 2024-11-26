import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, Content } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export function NewMeal() {
  const [onDiet, setOnDiet] = useState('true')

  const navigation = useNavigation()

  function handleChangeOnDiet() {
    setOnDiet(prev => (prev === 'true' ? 'false' : 'true'))
  }

  function handleCreateNewMeal() {
    navigation.navigate('created', { onDiet: onDiet })
  }

  return (
    <Container>
      <SafeAreaView edges={['top', 'left', 'right']}>
        <Heading title="Nova refeição" backTo="meals" />
      </SafeAreaView>

      <Content edges={['bottom', 'left', 'right']}>
        <ScrollView>
          <Text onPress={handleChangeOnDiet}>{onDiet}</Text>
        </ScrollView>

        <Button label="Cadastrar refeição" onPress={handleCreateNewMeal} />
      </Content>
    </Container>
  )
}
