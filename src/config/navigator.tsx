import { View, Text } from "react-native";
import React from "react";
import { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Game } from "@screens";

export type StackNavigatorParams = {
  Home: undefined;
  Game: { gameId: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();
export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
