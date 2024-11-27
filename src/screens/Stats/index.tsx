import { SafeAreaView } from 'react-native-safe-area-context'
import {
  BackButton,
  BackIcon,
  Container,
  Heading,
  StatsGrid,
  PercentageText,
  Title,
} from './styles'

import { Percentage } from '@components/DietCardStatus/styles'
import { useNavigation } from '@react-navigation/native'
import { StatCard } from '@components/StatCard'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'

export function Stats() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('meals')
  }

  return (
    <Container isOnDiet={false}>
      <SafeAreaView edges={['top']}>
        <Heading>
          <BackButton onPress={handleNavigation}>
            <BackIcon isOnDiet={false} />
          </BackButton>
          <Percentage>99,99%</Percentage>
          <PercentageText>das refeições dentro da dieta</PercentageText>
        </Heading>
      </SafeAreaView>

      <Content>
        <ContentScrollable>
          <Title>Estatísticas gerais</Title>

          <StatCard
            number="22"
            text="melhor sequência de pratos dentro da dieta"
          />
          <StatCard number="109" text="refeições registradas" />

          <StatsGrid>
            <StatCard
              number="99"
              text="refeições dentro da dieta"
              themeColor="green"
            />
            <StatCard
              number="10"
              text="refeições fora da dieta"
              themeColor="red"
            />
          </StatsGrid>
        </ContentScrollable>
      </Content>
    </Container>
  )
}
