import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const DateHourRow = styled(View)`
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACE.X};
`

export const DietOptionsRow = styled(View)`
  padding-top: 5px;
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACE.Y_ITEM};
`
