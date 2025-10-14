import { Header } from '@components/Header';

import { Container, Content, HeaderContainer } from './styles';

import { Highlight } from '@components/Highlight';
import { TeamsCard } from '@components/TeamCard';

export function Teams() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title="Equipes"
          subtitle='Preparem suas equipes'
        />
      </HeaderContainer>

      <Content>
        <TeamsCard />
        <TeamsCard />

      </Content>
    </Container>
  );
}