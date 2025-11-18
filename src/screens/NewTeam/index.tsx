import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';
import { createTeam } from '@storage/team/createTeam';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';


export function NewTeam() {
  const [team, setTeam] = useState('');

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  async function handleAddMembers() {
    try {
      if (team.trim().length === 0) {
        return Alert.alert('Nova equipe', 'Informe o nome da equipe.');
      }

      await createTeam(team);
      navigation.navigate('addMembers', { team });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova equipe', error.message);
      } else {
        Alert.alert('Nova equipe', 'Não foi possível criar uma nova equipe.');
        console.log(error);
      }
    }
  }

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton />

        <Highlight
          title='Nova Equipe'
          subtitle='Crie uma equipe e adicione membros'
        />
      </HeaderContainer>

      <Content>
        <Input
          placeholder='Nome da equipe'
          onChangeText={setTeam}
        />

        <Button
          title='Criar equipe'
          onPress={handleAddMembers}
        />
      </Content>
    </Container>
  );
}