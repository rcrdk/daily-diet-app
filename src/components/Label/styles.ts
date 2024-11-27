import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(Text)`
  margin-bottom: 3px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.COLORS.GRAY_1};
  `}
`
