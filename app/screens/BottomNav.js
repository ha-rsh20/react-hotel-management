import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuPage from "./MenuPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";
import stylesheet from "../config/stylesheet";
import { StyleSheet } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ShowCart from "./ShowCart";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={stylesheet.lsc}>
      <MenuPage iscart={false} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={stylesheet.lsc}>
      <LoginScreen />
    </View>
  );
}

function CartScreen() {
  return (
    <View style={stylesheet.lsc}>
      <MenuPage iscart={true} />
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function BottomNav(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="shoppingcart" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Login/Sign Up",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="login" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNav;
