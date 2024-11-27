import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  margin-bottom: ${({ theme }) => theme.SPACE.Y_GROUP};
`