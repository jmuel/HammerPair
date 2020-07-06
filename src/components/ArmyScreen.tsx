import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import type { APPLICATION_STATE } from "../redux/configureStore";

const armyListsSelector = createSelector(
  (state: APPLICATION_STATE) => state.armyLists.lists,
  (armyLists) => armyLists
);

export default () => {
  const armyLists = useSelector(armyListsSelector);
  return (
    <View>
      <Text>This is an army screen</Text>
      {armyLists.map((armyList) => {
        return <Text>{JSON.stringify(armyList)}</Text>;
      })}
    </View>
  );
};
