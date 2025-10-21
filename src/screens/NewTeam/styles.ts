import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: '#fff';
`;

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  padding-top: 54px;
  padding-bottom: 24px;
`;

export const Content = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
`;
