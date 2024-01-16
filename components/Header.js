import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ appName }) {
  return (
    <View>
      <Text>Wlecome to {appName}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
