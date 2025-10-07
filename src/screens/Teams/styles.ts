import { StyleSheet } from "react-native";
import styled from "styled-components/native";

  export const Container = styled.View`
  flex: 1;
  backgroundColor: '#fff';
  alignItems: center;
  justifyContent: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  `;

  export const Title = styled.Text``