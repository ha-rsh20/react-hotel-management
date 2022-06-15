import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoCont}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need!</Text>
      </View>
      <View style={styles.loginbut}></View>
      <View style={styles.registerbut}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoCont: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
  loginbut: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },
  registerbut: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
  },
});
export default HomePage;
