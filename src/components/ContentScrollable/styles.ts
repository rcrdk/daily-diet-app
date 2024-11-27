import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(ScrollView).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: theme.SPACE.Y_BLOCK,
    paddingBottom: theme.SPACE.Y_BLOCK,
  },
}))``
