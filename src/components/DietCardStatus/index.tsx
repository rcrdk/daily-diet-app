import type { StatsDTO } from '@dtos/StatsDTO'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getStats } from '@storage/meals/getStats'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { Container, Icon, Percentage, Text } from './styles'

export function DietCardStatus() {
  const [stats, setStats] = useState<StatsDTO>()

  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('stats')
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
    <Container isOnDiet={stats?.isOnDiet} onPress={handleNavigation}>
      <Icon isOnDiet={stats?.isOnDiet} />
      <Percentage>{stats?.average ?? '0%'}</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  )
}
