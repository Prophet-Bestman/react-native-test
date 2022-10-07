import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Input from "./components/Input";

export default function Test() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  const deleteGoal = (id) => {
    setGoals(goals?.filter((goal) => goal?.id !== id));
  };

  return (
    <>
      <View style={{ height: 50 }}></View>

      <View style={styles.appContainer}>
        <Pressable style={styles.addButton} onPress={() => setVisible(true)}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </Pressable>

        <Input
          goals={goals}
          setGoals={setGoals}
          visible={visible}
          setVisible={setVisible}
        />

        <View style={styles.goalsContainer}>
          <Text style={styles.title}>List</Text>

          <Text style={styles.subTitle}>
            The list of items entered goes here
          </Text>
          <FlatList
            style={{ paddingHorizontal: 12, flex: 1 }}
            alwaysBounceHorizontal={false}
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                onPress={() => deleteGoal(itemData?.item?.id)}
                item={itemData}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  background: {
    backgroundColor: "",
    flex: 1,
  },

  goalsContainer: {
    flex: 7,
    width: "100%",
    paddingVertical: 30,
  },
  addButton: {
    marginTop: 30,
    marginHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#fefefe",
    borderRadius: 12,
    width: "100%",
  },

  addButtonText: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    color: "#fefefe",
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
