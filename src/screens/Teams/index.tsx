import { Image, Text} from "react-native";
import logoImg from "@assets/logo.png";
import { Container } from "./styles";

export function Teams(){
  return (
    <Container>
      <Text>Groups</Text>
      <Image source={logoImg} />
    </Container>
  );
}