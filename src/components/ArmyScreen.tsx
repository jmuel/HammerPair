import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import type { APPLICATION_STATE } from "../redux/configureStore";

import ArmyCreationModal from "./ArmyCreationModal";

const armyListsSelector = createSelector(
  (state: APPLICATION_STATE) => state.armyLists.lists,
  (armyLists: Array<{ id: string; points: number }>) => armyLists
);

export default () => {
  const armyLists: Array<{ id: string; points: number }> = useSelector(
    armyListsSelector
  );
  const [isArmyCreationModalOpen, setIsArmyCreationModalOpen] = useState(false);
  return (
    <View>
      <Text>This is an army screen</Text>
      {armyLists.map((armyList) => (
        <Text key={armyList.id}>{JSON.stringify(armyList)}</Text>
      ))}
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => setIsArmyCreationModalOpen(true)}
      >
        <Text>Create an army</Text>
      </TouchableHighlight>
      <ArmyCreationModal
        visible={isArmyCreationModalOpen}
        onRequestClose={() => {
          setIsArmyCreationModalOpen(false);
        }}
      />
    </View>
  );
};

const styles = {
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
};
