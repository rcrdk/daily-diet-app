import { Text, View } from 'react-native'
import styled, { css } from 'styled-components/native'

type MealItemStyleProps = {
  isOnDiet: boolean
}

export const Container = styled.TouchableOpacity`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  margin-bottom: 8px;
`

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Hours = styled.Text`
  font-variant-numeric: tabular-nums;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xs};
  `}
`

export const Name = styled(Text).attrs({ numberOfLines: 1 })`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
  `}
`

export const Status = styled(View)<MealItemStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  margin-left: 12px;

  ${({ theme, isOnDiet }) =>
    isOnDiet
      ? css`
          background-color: ${theme.COLORS.GREEN_MID};
        `
      : css`
          background-color: ${theme.COLORS.RED_MID};
        `}
`
