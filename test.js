import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Test() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [tabs, setTabs] = useState("Input");

  const goalInputHandler = (value) => {
    if (!!value && value?.length > 0) setEnteredText(value);
  };

  const addGoalHandler = () => {
    if (!!enteredText) setGoals([...goals, enteredText]);
    setEnteredText("");
  };
  return (
    <>
      <View style={{ height: 50, backgroundColor: "#333" }}></View>
      <View style={styles.appContainer}>
        {tabs === "Input" && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your goal for the week"
              value={enteredText}
              onChangeText={goalInputHandler}
            />

            <Pressable style={styles.btnContainer} onPress={addGoalHandler}>
              <Text style={{ color: "white" }}>Add</Text>
            </Pressable>
          </View>
        )}
        {tabs === "List" && (
          <View style={styles.goalsContainer}>
            <Text style={styles.title}>List</Text>

            <Text style={styles.subTitle}>
              The list of items entered goes here
            </Text>
            <FlatList
              style={{ padding: 8 }}
              alwaysBounceHorizontal={false}
              data={goals}
              renderItem={(itemData) => (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>
                    {itemData.index + 1}. {itemData?.item}
                  </Text>
                </View>
              )}
            />
            {/* {goals?.length > 0 &&
                goals?.map((goal, i) => (
                  
                ))} */}
            {/* </FlatList> */}
          </View>
        )}

        <View style={styles.tabs}>
          <Pressable style={styles.btn} onPress={() => setTabs("Input")}>
            <Text style={styles.btnText}>Input</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => setTabs("List")}>
            <Text style={styles.btnText}>Lists</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    flex: 1,
  },
  background: {
    backgroundColor: "",
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },

  textInput: {
    backgroundColor: "#dfdfdf",
    flex: 1,
    padding: 16,
    borderWidth: 0,
    borderRadius: 12,
    marginRight: 12,
    fontSize: 16,
  },

  btnContainer: {
    backgroundColor: "#333",
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  goalsContainer: {
    flex: 7,
    paddingHorizontal: 12,
    paddingVertical: 30,
  },

  goalItem: {
    shadowColor: "#00000099",
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fefefe",
    marginVertical: 4,
    borderRadius: 12,
  },

  goalText: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "500",
    marginVertical: 4,
  },

  tabs: {
    height: 130,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 40,
  },

  btn: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  btnText: { fontSize: 18, fontWeight: "500" },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },

  subTitle: {
    fontSize: 18,
    color: "#898989",
    textAlign: "center",
    marginBottom: 40,
  },
});
