import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonSplitter from "./components/ButtonSplitter";
import InputSplitter from "./components/InputSplitter";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputSplitter placeholder=" Enter Music" />
        <ButtonSplitter title={"SPLITTER"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
