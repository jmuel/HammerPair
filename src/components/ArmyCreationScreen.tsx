import React from "react";
import { useDispatch } from "react-redux";
import { Button, Text, TextInput, View } from "react-native";
import { createArmy } from "../redux/modules/ArmyLists";

export default () => {
  const [armyName, onChangeArmyNameText] = React.useState(
    "Placeholder Army Name"
  );
  const dispatch = useDispatch();
  return (
    <View>
      <Text>This is an army creation screen</Text>
      <TextInput
        onChangeText={onChangeArmyNameText}
        value={armyName}
      ></TextInput>
      <Button
        title="Create Army"
        onPress={() => dispatch(createArmy(armyName))}
      />
    </View>
  );
};
