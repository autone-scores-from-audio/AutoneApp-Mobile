import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function BasicButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4461f2",
    borderRadius: 10,
    width: 280,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    fontSize: 26,
    color: "white",
  },
});