import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    padding-top: ${theme.SPACE.Y_GROUP}px;
    padding-bottom: ${theme.SPACE.Y_GROUP}px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.lg};
    color: theme.COLORS.GRAY_;
  `}
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.SPACE.X}px;
  bottom: 0;
  align-items: center;
  justify-content: center;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.GRAY_1,
}))``
