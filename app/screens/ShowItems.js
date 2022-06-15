import React from "react";
import { Text, View, StyleSheet, Button, Platform } from "react-native";

function ShowItems({ item, onAdd }) {
  let lastn = item.ino;
  return (
    <View style={styles.showItems}>
      <Text style={styles.itemNo}>{item.ino}</Text>
      <Text style={styles.item}>{item.item}</Text>
      <Button title="Add" onPress={() => onAdd(item, lastn)} />
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
    /*<div>
      <h4>{item.ino}</h4>
      <p>{item.item}</p>
      <p>{item.price}</p>
    </div>*/
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
    maxWidth: 15,
    minWidth: 10,
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

export default ShowItems;
