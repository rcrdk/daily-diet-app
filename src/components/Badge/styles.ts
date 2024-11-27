import styled, { css } from 'styled-components/native'

export type BadgeStyleThemeColor = 'green' | 'red'

type BadgeMarkerStyleProps = {
  themeColor: BadgeStyleThemeColor
}

export const Container = styled.View`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Marker = styled.View<BadgeMarkerStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 8px;
  background-color: ${({ theme, themeColor }) =>
    themeColor === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
