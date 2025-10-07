import { Loading } from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Teams } from "@screens/Teams";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";


export default function App() {

  const [fontsLoadead] = useFonts ({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      {!fontsLoadead ? <Teams /> : <Loading />}
    </ThemeProvider>
  );
}


