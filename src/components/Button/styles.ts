import { TouchableOpacity } from "react-native";
import { css } from "styled-components/native";
import styled from "styled-components/native"

export type ButtonTypeStyleProps = 'PRIMARY' | "SECONDARY"

type Props = {
   type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  padding: 18px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-weight: ${ theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;