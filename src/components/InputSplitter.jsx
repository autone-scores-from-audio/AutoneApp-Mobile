import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

const BasicInput = (props) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      autoCapitalize="none"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
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

export default BasicInput;