import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  margin-bottom: ${({ theme }) => theme.SPACE.Y_GROUP}px;
`
