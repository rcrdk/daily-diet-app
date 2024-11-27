import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  width: 100%;
  min-height: 50px;
  max-height: 150px;
  border-radius: 5px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.md};
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${theme.COLORS.GRAY_5};
    padding: ${theme.SPACE.INPUT_Y}px ${theme.SPACE.INPUT_X}px;
  `}
`
