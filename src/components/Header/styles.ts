import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    padding-top: ${theme.SPACE.Y_GROUP}px;
    padding-bottom: ${theme.SPACE.Y_GROUP}px;
  `}
`

export const Image = styled.Image`
  width: 89px;
  height: 40px;
`
