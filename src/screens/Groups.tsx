import { Image, StyleSheet, Text, View } from "react-native";

import logoImg from "@assets/logo.png";

export function Groups(){
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
      <Image source={logoImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});