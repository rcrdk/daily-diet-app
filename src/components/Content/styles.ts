import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})`
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${({ theme }) => css`
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`
