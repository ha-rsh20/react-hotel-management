import React from "react";
import { Text, View, StyleSheet, Button, Platform } from "react-native";

function ShowCart({ cartitem, onRemove }) {
  return (
    <View style={styles.showItems}>
      <Text style={styles.itemNo}>{cartitem.cno}</Text>
      <Text style={styles.item}>{cartitem.citem}</Text>
      <Button title="Remove" onPress={() => onRemove(cartitem)} />
      <Text style={styles.itemPrice}>{cartitem.cprice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  showItems: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  itemNo: {
    width: "2%",
    maxWidth: 20,
    minWidth: 20,
  },
  item: {
    width: "90%",
    maxWidth: Platform.OS === "android" ? 250 : "90%",
  },
  itemPrice: {
    marginLeft: 5,
    width: "10%",
    minWidth: 50,
  },
});

export default ShowCart;
