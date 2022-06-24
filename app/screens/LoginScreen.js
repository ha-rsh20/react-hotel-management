import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../config/colors";
import HomePage from "./HomePage";

function LoginScreen(props) {
  const [user, setUser] = useState({
    uname: "",
    pass: "",
  });
  const { uname, pass } = user;

  const postData = async (e) => {
    if (!uname || !pass) {
      alert("Username or Password should not empty!");
    } else {
      const res = await fetch(
        "https://test-react-native-13f65-default-rtdb.firebaseio.com/test-react-native/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uname,
            pass,
          }),
        }
      );
      if (res) {
        setUser({
          uname: "",
          pass: "",
        });
      }
    }
  };

  function getUser() {
    setUser({
      uname: "",
      pass: "",
    });
  }

  return (
    <View style={styles.lsc}>
      <View style={styles.border}>
        <ImageBackground
          style={styles.img}
          imageStyle={{ borderRadius: 10 }}
          source={require("../assets/photo.jpeg")}
        >
          <View style={styles.pad}>
            <View style={styles.headings_inpt}>
              <TouchableOpacity style={styles.headings_style}>
                <Text style={styles.headings}>SIGN IN </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headings_style}>
                <Text style={styles.headings}> SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <View style={styles.inpt}>
                <Text style={styles.font}>USERNAME</Text>
                <TextInput
                  value={user.uname}
                  placeholder=""
                  onChangeText={(text) => setUser({ ...user, uname: text })}
                  style={styles.inborder}
                ></TextInput>
              </View>
              <View style={styles.inpt}>
                <Text style={styles.font}>PASSWORD </Text>
                <TextInput
                  value={user.pass}
                  placeholder=""
                  onChangeText={(text) => setUser({ ...user, pass: text })}
                  style={styles.inborder}
                  secureTextEntry
                ></TextInput>
              </View>
              <View style={styles.inpt}>
                <Button title="SUBMIT" style={styles.but} onPress={postData} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  lsc: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
  },
  img: {
    height: 500,
    width: 350,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: "20%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  headings: {
    fontSize: 20,
    fontWeight: "400",
    color: "#ffff",
    fontFamily: "sans-serif",
  },
  headings_style: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  headings_inpt: {
    marginTop: 20,
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "400",
    color: "#ffff",
  },
  border: {},
  input: {
    width: "100%",
    marginTop: 10,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  inpt: {
    flexDirection: "row",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "400",
    color: "#ffff",
  },
  inborder: {
    marginLeft: 3,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 10,
    fontWeight: "500",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  pad: {
    margin: 25,
    alignItems: "center",
  },
  font: {
    paddingTop: 2,
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "sans-serif",
  },
  but: {
    color: "#ffff",
    fontFamily: "sans-serif",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "solid",
    borderRadius: 10,
  },
});
export default LoginScreen;
