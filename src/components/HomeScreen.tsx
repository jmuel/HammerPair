import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../App";

import UserCreationModal from "./Users/UserCreationModal";
import ActiveUserPicker from "./Users/ActiveUserPicker";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default ({ navigation }: Props) => {
  const [isUserCreationModalOpen, setIsUserCreationModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Text>This is a home screen</Text>
      <Button
        title="Go to Pairings"
        onPress={() => navigation.navigate("Pairing")}
      />
      <Button
        title="Go to Army Lists"
        onPress={() => navigation.navigate("Army")}
      />
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => setIsUserCreationModalOpen(true)}
      >
        <Text>Create a User</Text>
      </TouchableHighlight>
      <ActiveUserPicker />
      <UserCreationModal
        visible={isUserCreationModalOpen}
        onRequestClose={() => {
          setIsUserCreationModalOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
