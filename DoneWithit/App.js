import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/screens/HomePage";
import LoginScreen from "./app/screens/LoginScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MenuPage from "./app/screens/MenuPage";
import BottomNav from "./app/screens/BottomNav";
import { Platform } from "react-native";
import WebScreen from "./app/screens/WebScreen";

export default function App() {
  return Platform.OS === "android" ? <BottomNav /> : <WebScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
