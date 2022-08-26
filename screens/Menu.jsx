import React from "react";
import { Dimensions, StyleSheet, View, Text,  TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
let ScreenHeight = Dimensions.get("window").height;
import { AntDesign } from '@expo/vector-icons'; 

export default function MenuScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.general}>
      <TouchableOpacity style={styles.LogOut}><Text style={{color:"white"}} onPress={() => (navigation.goBack())}>
          Log out
      </Text></TouchableOpacity>
      <Text style={styles.titulo}>MENU</Text>
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
  },
  LogOut:{
    padding:10,
    borderRadius:10,
    position: 'absolute',
    top:50,
    left:10,
    backgroundColor:"#5C80BC",
    color: "white",
    width:90,
    paddingLeft:17,
    height:40
  }
});
