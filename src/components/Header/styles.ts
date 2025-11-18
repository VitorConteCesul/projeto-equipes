
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
