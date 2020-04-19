import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import PairingScreen from './PairingScreen';

export type RootStackParamList = {
  Home: undefined,
  Pairing: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Pairing"
          component={PairingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}