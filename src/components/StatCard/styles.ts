import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StatCardStyleThemeColor = 'default' | 'green' | 'red'

type StatCardStyleProps = {
  themeColor?: StatCardStyleThemeColor
}

export const Container = styled(View)<StatCardStyleProps>`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  ${({ theme, themeColor }) =>
    themeColor === 'green' &&
    css`
      background-color: ${theme.COLORS.GREEN_LIGHT};
      flex: 1;
    `}

  ${({ theme, themeColor }) =>
    themeColor === 'red' &&
    css`
      background-color: ${theme.COLORS.RED_LIGHT};
      flex: 1;
    `}
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xl};
  `}
`

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.sm};
  `}
`
