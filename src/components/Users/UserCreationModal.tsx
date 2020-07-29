import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Picker,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";

import Modal from "modal-enhanced-react-native-web";

import { createUser } from "../../redux/modules/UserState";

interface PROPS {
  visible: boolean;
  onRequestClose: () => void;
}


const UserCreationModal = ({ onRequestClose, visible }: PROPS) => {
  const [userName, setUserName] = useState("Username Goes Here");
  const [email, setEmail] = useState("Email Goes Here");
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent={true}
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Create a User</Text>
          <Text style={styles.modalText}>Username</Text>
          <TextInput value={userName} onChangeText={setUserName} />
          <Text style={styles.modalText}>Email Address</Text>
          <TextInput value={email} onChangeText={setEmail} />
          <Button
            title="Create User"
            onPress={() => {
              dispatch(createUser(userName, email));
              onRequestClose();
            }}
          />
          <Button
            title="Cancel"
            onPress={() => {
              onRequestClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default UserCreationModal;

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
