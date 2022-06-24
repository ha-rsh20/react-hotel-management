import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuPage from "./MenuPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";
import stylesheet from "../config/stylesheet";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ShowCart from "./ShowCart";
import ShowItems from "./ShowItems";
import Constants from "expo-constants";
const Tab = createBottomTabNavigator();

function BottomNav(props) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([
    {
      ino: 1,
      item: "Dhossa",
      price: 100,
    },
    {
      ino: 2,
      item: "Idali",
      price: 90,
    },
    {
      ino: 3,
      item: "Uttapam",
      price: 80,
    },
  ]);

  function addToCart(item) {
    let cno;
    cno = cart.length + 1;
    //console.log("cart is not empty!,", cart.length);

    const newItem = {
      cno,
      citem: item.item,
      cprice: item.price,
    };
    setCart([...cart, newItem]);
  }

  function removeFromCart(cartitem) {
    setCart(
      cart.filter((e) => {
        return e !== cartitem;
      })
    );
  }

  function invoice() {
    var total = 0;
    cart.map((cart) => {
      return (total = total + parseInt(cart.cprice));
    });
    alert(
      cart.map((cart) => {
        return "\n" + cart.citem + ":" + cart.cprice;
      }) +
        "\nTotal: " +
        total
    );
  }

  function HomeScreen() {
    return (
      <View style={styles.safeView}>
        <View style={styles.showMenu}>
          {items.map((items) => {
            return <ShowItems item={items} key={items.ino} onAdd={addToCart} />;
          })}
        </View>
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
      <View style={styles.safeView}>
        <View style={styles.showMenu}>
          {cart.map((cartItems) => {
            return (
              <ShowCart
                cartitem={cartItems}
                key={cartItems.cno}
                onRemove={removeFromCart}
              />
            );
          })}
        </View>
        <Button title="Create Invoice" onPress={invoice} />
      </View>
    );
  }
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

const styles = StyleSheet.create({
  safeView: {
    top: Constants.statusBarHeight + 10,
    alignItems: "center",
    flex: 1,
  },
  headingMenu: {
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  showMenu: {
    width: "80%",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default BottomNav;
