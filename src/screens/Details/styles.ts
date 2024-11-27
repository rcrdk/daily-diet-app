import styled, { css } from 'styled-components/native'

type DetailsStyleProps = {
  isOnDiet: boolean
}

export const Container = styled.View<DetailsStyleProps>`
  flex: 1;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xl};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: ${theme.SPACE.Y_ITEM};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: ${theme.SPACE.Y_GROUP};
  `}
`

export const ActionButtons = styled.View`
  gap: 12px;
`
