import { Teams } from "@screens/Teams";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Teams />
    </ThemeProvider>
  );
}


