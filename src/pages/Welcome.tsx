import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import colors from "../../styles/colors";
import wateringImg from "../assets/watering.png";
import { useState } from "react";

export function Welcome() {
  const [visible, setVisible] = useState(true);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"} suas plantas {"\n"} de forma fácil
      </Text>
      {visible && <Image source={wateringImg} style={styles.image}></Image>}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <Button buttonText={">"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 80,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});