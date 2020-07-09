import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Picker,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
  Button,
} from "react-native";

import Modal from "modal-enhanced-react-native-web";
import type {FACTION} from "../redux/modules/ArmyLists";

import { createArmy } from "../redux/modules/ArmyLists";

interface PROPS {
  visible: boolean;
  onRequestClose: () => void;
}

const factions = [
  "IMPERIUM",
  "CHAOS",
  "AELDARI",
  "TYRANIDS",
  "ORKS",
  "NECRONS",
  "T'AU EMPIRE",
];

const ArmyCreationModal = ({ onRequestClose, visible }: PROPS) => {
  const [armyName, setArmyName] = useState("Placeholder Army Name");
  const [armyFaction, setArmyFaction] = useState<FACTION>("IMPERIUM");
  const [points, setPoints] = useState(50);
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
          <Text style={styles.modalText}>Create an army</Text>
          <Text style={styles.modalText}>Faction</Text>
          <Picker selectedValue={armyFaction} onValueChange={setArmyFaction}>
            {factions.map((faction) => (
              <Picker.Item label={faction} value={faction} />
            ))}
          </Picker>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={onRequestClose}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
          <Text style={styles.modalText}>Select an army name</Text>
          <TextInput value={armyName} onChangeText={setArmyName} />
          <Text style={styles.modalText}>Set army points</Text>
          <TextInput
            keyboardType="numeric"
            value={points.toString()}
            onChangeText={(newPoints: string) =>
              setPoints(parseInt(newPoints.replace(/[^0-9]/g, "")))
            }
          />
          <Button
            title="Create Army"
            onPress={() => {
              dispatch(createArmy(armyName, armyFaction, points));
              onRequestClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ArmyCreationModal;

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
