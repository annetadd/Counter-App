import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


function CustomButton({ label, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title={label} onPress={onPress} />
    </View>
  );
}


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>

      
      <CustomButton label="Increment" onPress={() => setCount(count + 1)} />
      <CustomButton label="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0edacfff",
  },
  counterText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: 150,
  },
});