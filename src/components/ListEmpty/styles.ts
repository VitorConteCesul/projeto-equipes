import { css } from "styled-components"
import styled from "styled-components/native"

export const Container = styled.View``

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-weight: ${ theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`;