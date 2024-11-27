import styled, { css } from 'styled-components/native'

export type DietSwitcherStyleThemeColor = 'green' | 'red'

type DietSwitcherStyleProps = {
  isActive?: boolean
  themeColor: DietSwitcherStyleThemeColor
}

type DietSwitcherMarkerStyleProps = {
  themeColor: DietSwitcherStyleThemeColor
}

export const Container = styled.TouchableOpacity<DietSwitcherStyleProps>`
  flex: 1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
    border: 1px solid ${theme.COLORS.GRAY_6};
  `}

  ${({ theme, isActive, themeColor }) =>
    isActive === true &&
    themeColor === 'green' &&
    css`
      background-color: ${theme.COLORS.GREEN_LIGHT};
      border: 1px solid ${theme.COLORS.GREEN_DARK};
    `}

  ${({ theme, isActive, themeColor }) =>
    isActive === false &&
    themeColor === 'red' &&
    css`
      background-color: ${theme.COLORS.RED_LIGHT};
      border: 1px solid ${theme.COLORS.RED_DARK};
    `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Marker = styled.View<DietSwitcherMarkerStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 8px;
  background-color: ${({ theme, themeColor }) =>
    themeColor === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
