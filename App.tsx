import { Teams } from '@screens/Teams';


import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { NewTeam } from '@screens/NewTeam';

export default function App() {
  const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
       { fontsLoaded ? <NewTeam /> : <Loading /> }
    </ThemeProvider>
  );
}