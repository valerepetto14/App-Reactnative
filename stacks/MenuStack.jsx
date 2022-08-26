import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos las pantallas que vamos a utilizar
import MenuScreen from "../screens/Menu";


const Stack = createNativeStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={MenuScreen}/>
    </Stack.Navigator>
  );
};

export default MenuStack;
