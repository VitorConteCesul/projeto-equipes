import { SafeAreaViewBase, View } from "react-native";
import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: #fff;

    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const HeaderContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    padding: 24px 0;
`;

export const Content = styled(View)`
    flex: 1;
    padding: 24px;
`;