import React from "react";
import { Dimensions, StyleSheet, View, Text,  TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
let ScreenHeight = Dimensions.get("window").height;

export default function InicioScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.general}>
      <Text style={styles.titulo}>MyApp</Text>
        <View>  
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.btn}><Text style={styles.txt}>Login</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.btn}><Text style={styles.txt}>Register</Text></TouchableOpacity>
        </View>
    </View>
  );
}
// orbitron regular
const styles = StyleSheet.create({
  general: {
    height:ScreenHeight,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#E8C547",
  },
  btn: {
    width: 300,
    margin: 10,
    backgroundColor: "#5C80BC",
    borderRadius:10,
  },
  txt: {
    fontSize: 30,
    textAlign:"center",
    padding:10,
    color: "white",
    fontFamily: "orbitron",
  },
  titulo:{
    fontSize:40,
    color:"#4D5061",
    fontFamily: "orbitron",
  }
});
