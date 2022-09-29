import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>
          {item?.index + 1}. {item?.item?.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
});
