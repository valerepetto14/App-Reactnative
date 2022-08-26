import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos las pantallas que vamos a utilizar
import LoginScreen from "../screens/Login";
import Inicio from "../screens/Inicio";
import Register from "../screens/Register";
import MenuScreen from "../screens/Menu";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="inicio" component={Inicio}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Menu" component={MenuScreen}/>
    </Stack.Navigator>
  );
};

export default LoginStack;
