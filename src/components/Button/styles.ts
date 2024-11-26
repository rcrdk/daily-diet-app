import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_1};
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
  `}
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 8px;
`
