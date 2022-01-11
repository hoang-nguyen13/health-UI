import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export { MainStackNavigator };
