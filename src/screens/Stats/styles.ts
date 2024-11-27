import { ArrowLeft } from 'phosphor-react-native'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

type StatsStyleProps = {
  isOnDiet?: boolean
}

export const Container = styled(View)<StatsStyleProps>`
  flex: 1;

  ${({ theme, isOnDiet }) =>
    isOnDiet
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : css`
          background-color: ${theme.COLORS.RED_LIGHT};
        `}
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.SPACE.X};
`

export const BackIcon = styled(ArrowLeft).attrs<StatsStyleProps>(
  ({ theme, isOnDiet }) => ({
    size: 28,
    color: isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)``

export const Heading = styled.View`
  position: relative;
  align-items: center;

  ${({ theme }) => css`
    padding-top: ${theme.SPACE.Y_GROUP}px;
    padding-bottom: ${theme.SPACE.Y_BLOCK}px;
  `}
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xxl};
  `}
`

export const PercentageText = styled.Text`
  margin-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.sm};
  `}
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
    margin-bottom: ${theme.SPACE.Y_GROUP}px;
  `}
`

export const StatsGrid = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`
