import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import type {RootStackParamList} from './App';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function App({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>This is a home screen</Text>
      <Button
        title="Go to Pairings"
        onPress={() => navigation.navigate('Pairing')}
      />
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
