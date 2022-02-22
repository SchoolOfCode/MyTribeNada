import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View ,ImageBackground} from "react-native";
import * as Font from "expo-font";
import ChoresNavigator from "./navigation/ChoresNavigator";
import image from "./assets/image.jpeg"
import AppLoading from "expo-app-loading";
import ChoresListScreen from "./screens/ChoresList";

const fetchFonts = () => {
  return Font.loadAsync({
    "BebasNeue-regular": require("./assets/fonts/BebasNeue-Regular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
         onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
    <ChoresNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
