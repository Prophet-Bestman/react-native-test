import { StyleSheet, View } from "react-native";
import Test from "./test";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    flex: 1,
  },
});
