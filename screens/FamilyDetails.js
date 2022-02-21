import React from "react";
import { View, Text, StyleSheet } from "react-native";


function FamilyScreen() {
  return (
    <View style={styles.screen}>
      <Text>Family Screen Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FamilyScreen;
