import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';

export function Teams() {
  const [teams, setTeams] = useState(['Equipe 1', 'Equipe 2']);

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title='Equipes'
          subtitle='Preparem suas equipes'
        />
      </HeaderContainer>

      <Content>
        <FlatList
          data={teams}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TeamCard title={item} />
          )}
          ListEmptyComponent={() => <ListEmpty message='Começe criando uma equipe!' />}
          contentContainerStyle={teams.length === 0 && { flex: 1 }}
        />

        <Button
          title='Criar uma nova equipe'
        />
      </Content>
    </Container>
  );
}