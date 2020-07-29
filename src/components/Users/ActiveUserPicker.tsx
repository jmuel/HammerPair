import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Picker,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { changeActive } from "../../redux/modules/UserState";


const ActiveUserPicker = () => {
  let users = useSelector(state => state.userState.users);
  if (users == undefined) users = [];
  const dispatch = useDispatch();
	return (
	   <View style={styles.container}>
      <Text>Pick the active user:</Text>
      <Picker 
        onValueChange={(itemValue) => {
              dispatch(changeActive(itemValue));
        }}
      >
            {users.map((user) => (
              <Picker.Item label={user.name} value={user.id} />
            ))}
      </Picker>
    </View>
  );
};

export default ActiveUserPicker;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});