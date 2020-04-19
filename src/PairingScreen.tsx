import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import type {RootStackParamList} from './App';

type PairingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Pairing'
>;

type Props = {
  navigation: PairingScreenNavigationProp;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a pairing screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
