import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ShowItems from "./ShowItems";
import Constants from "expo-constants";
import ShowCart from "./ShowCart";

import stylesheet from "../config/stylesheet";
function MenuPage(props) {
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

  if (props.iscart === true) {
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
      </View>
    );
  } else {
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
  //return (

  /*<View style={styles.safeView}>
      <View style={styles.showMenu}>
        {items.map((items) => {
          return <ShowItems item={items} key={items.ino} onAdd={addToCart} />;
        })}
      </View>
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
    </View>*/
  /*<div className="container">
      {items.map((items) => {
        return <ShowItems item={items} key={items.ino} />;
      })}
    </div>*/
  //);
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

export default MenuPage;
