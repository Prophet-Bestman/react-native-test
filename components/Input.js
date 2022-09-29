import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Input = ({ goals, setGoals, visible, setVisible }) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (value) => {
    if (!!value && value?.length > 0) setEnteredText(value);
  };

  const addGoalHandler = () => {
    if (!!enteredText)
      setGoals([...goals, { text: enteredText, id: Math.random().toString() }]);
    setEnteredText("");
    setVisible(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/imgs/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal for the week"
          value={enteredText}
          onChangeText={goalInputHandler}
        />

        <View style={styles.btns}>
          <Pressable
            style={{ ...styles?.btnContainer, ...styles.btnContainer2 }}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.btnText2}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.btnContainer} onPress={addGoalHandler}>
            <Text style={styles.btnText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fefefe",
    marginBottom: 24,
    backgroundColor: "#000",
  },

  img: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    backgroundColor: "#111",
    width: "80%",
    padding: 16,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 12,
    marginRight: 12,
    fontSize: 16,
    color: "#fefefe",
  },

  btns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },

  btnContainer: {
    width: "50%",
    backgroundColor: "#fefefe",
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginVertical: 20,
    marginHorizontal: 12,
  },

  btnContainer2: {
    backgroundColor: "#00000000",
    borderWidth: 2,
    borderColor: "#777",
  },

  btnText: {
    color: "#333",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  btnText2: {
    color: "#fefefe",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
});
