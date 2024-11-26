import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type NewMealMessageStyleProps = {
  isOnDiet?: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    padding-left: ${theme.SPACE.X}px;
    padding-right: ${theme.SPACE.X}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`

export const Title = styled.Text<NewMealMessageStyleProps>`
  text-align: center;

  ${({ theme, isOnDiet }) => css`
    margin-bottom: ${theme.SPACE.Y_ITEM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xl};
    color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
  `}
`

export const Strong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.md};
  `}
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;

  ${({ theme }) => css`
    margin-top: ${theme.SPACE.Y_BLOCK}px;
    margin-bottom: ${theme.SPACE.Y_GROUP}px;
  `}
`
