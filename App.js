import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const appName = "My First React Native App";
  const [text, setText] = useState("Type here!");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName={appName} />
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: "50%",
  },
  text: {
    backgroundColor: "yellow",
    borderColor: "black",
    width: "50%",
    height: "30%",
  },
});
