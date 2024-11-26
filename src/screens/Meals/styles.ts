import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  ${({ theme }) => css`
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.SPACE.Y_GROUP}px;
    margin-bottom: ${theme.SPACE.Y_ITEM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
  `}
`

export const ListHeader = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.SPACE.Y_GROUP}px;
    margin-bottom: ${theme.SPACE.Y_ITEM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.lg};
  `}
`
