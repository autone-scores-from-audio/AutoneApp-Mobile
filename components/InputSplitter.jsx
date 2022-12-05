import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function BasicInput(props) {
  return (
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: "#4f555a",
    backgroundColor: "#eaf0f7",
    borderRadius: 10,
    height: 50,
    width: 280,
    marginBottom: 20,
  },
});