import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

type DietCardStyleProps = {
  isOnDiet?: boolean
}

export const Container = styled.TouchableOpacity<DietCardStyleProps>`
  position: relative;
  padding: 20px 16px;
  align-items: center;
  text-align: center;
  border-radius: 8px;

  ${({ theme, isOnDiet }) =>
    isOnDiet
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : css`
          background-color: ${theme.COLORS.RED_LIGHT};
        `}
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xxl};
  `}
`

export const Text = styled.Text`
  margin-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.sm};
  `}
`

export const Icon = styled(ArrowUpRight).attrs<DietCardStyleProps>(
  ({ theme, isOnDiet }) => ({
    size: 28,
    color: isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)`
  position: absolute;
  top: 12px;
  right: 12px;
`
