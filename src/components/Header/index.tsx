import logoImg from '@assets/logo.png';

import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('teams');
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon name='arrow-back-ios' />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}