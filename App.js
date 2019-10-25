import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)}></Button>
      <Button title="Subtract" onPress={() => setCount(count - 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 60
  }
});
