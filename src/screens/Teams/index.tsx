import { useCallback, useEffect, useState } from 'react';

import { FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';
import { fetchAllTeams } from '@storage/team/fetchAllTeams';

export function Teams() {
  const [teams, setTeams] = useState<string[]>([]);

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function handleNewTeam() {
    navigation.navigate('newTeam');
  }

  async function handleFetchAllTeams() {
    try {
      const data = await fetchAllTeams();
      setTeams(data);
    } catch (error) {
      throw console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    handleFetchAllTeams();
  }, []));

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
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
          onPress={handleNewTeam}
        />
      </Content>
    </Container>
  );
}