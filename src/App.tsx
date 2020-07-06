import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import HomeScreen from "./components/HomeScreen";
import PairingScreen from "./components/PairingScreen";
import ArmyCreationScreen from "./components/ArmyCreationScreen";
import ArmyScreen from "./components/ArmyScreen";
import store from "./redux/configureStore";

export type RootStackParamList = {
  Home: undefined;
  Pairing: undefined;
  ArmyCreation: undefined;
  Army: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pairing" component={PairingScreen} />
          <Stack.Screen name="ArmyCreation" component={ArmyCreationScreen} />
          <Stack.Screen name="Army" component={ArmyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
