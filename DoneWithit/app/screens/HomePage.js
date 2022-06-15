import React from "react";
import { StyleSheet, View, Text } from "react-native";
import stylesheet from "../config/stylesheet";
import Constants from "expo-constants";
import { Button } from "react-native";
import { htmlForm } from "react-bootstrap";

let heading = {};

function HomePage(props) {
  return (
    <View>
      <Text>hello</Text>
    </View>
    /*<form className="row g-3">
      <div className="col-auto">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          readonly
          className="htmlForm-control-plaintext"
          id="staticEmail2"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword2" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          className="htmlForm-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Confirm identity
        </button>
      </div>
    </form>*/
  );
}
export default HomePage;

const styles = StyleSheet.create({
  headings: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "sans-serif",
  },
  menu: {
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderWidth: 2,
    width: "95%",
    margin: 10,
  },
  menu_items: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "sans-serif",
    marginRight: "70%",
  },
  menuDirection: {
    flexDirection: "row",
  },
  menu_sub: {
    flexDirection: "row-reverse",
  },
});
