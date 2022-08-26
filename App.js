import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './TabNavigator';
import LoginStack from './stacks/LoginStack'
import MenuStack from './stacks/MenuStack'
import { useFonts } from 'expo-font'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    orbitron: require("./assets/fonts/Orbitron-Regular.ttf"),
  })
  return (
    <NavigationContainer>
       <LoginStack></LoginStack>
    </NavigationContainer>
  );
}
