import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Test from "./test";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Test />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    flex: 1,
  },
});
