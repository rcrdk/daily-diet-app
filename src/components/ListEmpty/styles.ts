import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: ${({ theme }) => theme.SPACE.Y_ITEM}px;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xl};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
    color: ${theme.COLORS.GRAY_1};
    margin-top: ${theme.SPACE.Y_ITEM}px;
    margin-bottom: ${theme.SPACE.Y_BLOCK}px;
  `}
`
