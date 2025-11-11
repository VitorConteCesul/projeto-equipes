import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';

export function NewTeam() {
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Nova Equipe'
          subtitle='Crie uma equipe e adicione membros'
        />
      </HeaderContainer>

      <Content>
        <Input
          placeholder='Nome da equipe'
        />

        <Button
          title='Criar equipe'
        />
      </Content>
    </Container>
  );
}