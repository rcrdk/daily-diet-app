import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Content = styled(SafeAreaView)`
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${({ theme }) => css`
    padding-top: ${theme.SPACE.Y_BLOCK}px;
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`
