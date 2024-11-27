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
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StatCard } from '@components/StatCard'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'
import { Alert } from 'react-native'
import { useCallback, useState } from 'react'
import { StatsDTO } from '@dtos/StatsDTO'
import { getStats } from '@storage/meals/getStats'

export function Stats() {
  const [stats, setStats] = useState<StatsDTO>()

  const navigation = useNavigation()

  function handleNavigation() {
    navigation.goBack()
  }

  async function fetchStats() {
    try {
      const data = await getStats()
      setStats(data)
    } catch (error) {
      Alert.alert(
        'Estatísticas',
        'Não foi possível carregar as informações. Tente novamente mas tarde.',
      )
      console.error(error)
      navigation.goBack()
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStats()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  )

  return (
    <Container isOnDiet={stats?.isOnDiet}>
      <SafeAreaView edges={['top']}>
        <Heading>
          <BackButton onPress={handleNavigation}>
            <BackIcon isOnDiet={stats?.isOnDiet} />
          </BackButton>
          <Percentage>{stats?.average ?? '0%'}</Percentage>
          <PercentageText>das refeições dentro da dieta</PercentageText>
        </Heading>
      </SafeAreaView>

      <Content>
        <ContentScrollable>
          <Title>Estatísticas gerais</Title>

          <StatCard
            number={stats?.bestSequence ?? 0}
            text="melhor sequência de pratos dentro da dieta"
          />
          <StatCard
            number={stats?.mealsCount ?? 0}
            text="refeições registradas"
          />

          <StatsGrid>
            <StatCard
              number={stats?.onDietCount ?? 0}
              text="refeições dentro da dieta"
              themeColor="green"
            />
            <StatCard
              number={stats?.offDietCount ?? 0}
              text="refeições fora da dieta"
              themeColor="red"
            />
          </StatsGrid>
        </ContentScrollable>
      </Content>
    </Container>
  )
}
