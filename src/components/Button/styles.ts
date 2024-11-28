import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStyleMode = 'filled' | 'outline'

type ButtonStyleProps = {
  mode: ButtonStyleMode
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;

  ${({ theme }) => css`
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
  `}

  ${({ theme, mode }) =>
    mode === 'filled'
      ? css`
          background-color: ${theme.COLORS.GRAY_1};
        `
      : css`
          border: 1px solid ${theme.COLORS.GRAY_1};
        `}
`

export const Text = styled.Text<ButtonStyleProps>`
  ${({ theme, mode }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
    color: ${mode === 'filled' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`

export const Icon = styled(Feather).attrs<ButtonStyleProps>(
  ({ theme, mode }) => ({
    size: 18,
    color: mode === 'filled' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  }),
)`
  margin-right: 8px;
`
