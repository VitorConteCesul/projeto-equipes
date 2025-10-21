import { Header } from '@components/Header';

import { Container, Content, HeaderContainer} from './styles';

import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function NewTeam() {
  const [teams, setTeams] = useState(['Equipe 1']);

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title="Nova Equipe"
          subtitle='Preparem suas equipes'
        />
      </HeaderContainer>

      <Content>
        <Input placeholder="Nome da equipe"/>

        <Button
          title="Criar equipe"
          
        />
      </Content>
    </Container>
  );
}