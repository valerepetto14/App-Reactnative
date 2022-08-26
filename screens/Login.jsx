import React, { useState } from 'react';
const axios = require('axios')
import { Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, BackHandler ,StyleSheet, View, Text, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
let ScreenHeight = Dimensions.get("window").height;
import { AntDesign } from '@expo/vector-icons'; 

export default function LoginScreen() {
  const navigation = useNavigation();
  const [user, setuser] = useState(0);
  const [pass, setpass] = useState(0);

  const login = async (user, pass) => {
    axios({
      method: 'post',
      url: 'http://54.94.125.72:3000/login',
      data: {
        user: user,
        pass: pass
      }}).then(function (response) {
        navigation.navigate("Menu")
      })
      .catch(function (error) {
        Alert.alert("Usuario o contreseña mal")
        if(error.response.status==401){
          Alert.alert("Usuario o contreseña mal")
        }
      })
    }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.general}>
      <View style={styles.general}>
        <TouchableOpacity style={styles.back}><Text style={{color:"white"}} onPress={() => (navigation.goBack())}>
        <AntDesign name="caretleft" size={22} color="black" />
        </Text></TouchableOpacity>
        <View>
          <TextInput onChangeText={(value)=>{setuser(value)}} value={user} placeholder="  Username" style={styles.input} ></TextInput>
          <TextInput onChangeText={(value)=>{setpass(value)}} value={pass} secureTextEntry={true} placeholder="  Password" style={styles.input} ></TextInput>
          <TouchableOpacity onPress={() => login(user,pass)} style={styles.btn}><Text style={styles.txt}>Login</Text></TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  general: {
    height:ScreenHeight,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8C547",
  },
  btn: {
    width: 300,
    margin: 10,
    backgroundColor: "#5C80BC",
    borderRadius:10
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
  },
  input:{
    height:50,
    margin:10,
    width:300,
    backgroundColor:"#E1E0DA",
    fontSize:20,
    borderRadius:8
  },
  back: {
    padding:10,
    borderRadius:10,
    position: 'absolute',
    top:50,
    left:0,
    backgroundColor:"#5C80BC",
    color: "white",
    width:40,
    height:40
  },
});
