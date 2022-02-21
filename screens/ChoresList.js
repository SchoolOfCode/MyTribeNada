import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/ChoresCard";
import image from "../assets/image.jpeg"

function ChoresListScreen(props) {
  console.log("This is the props", props);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text>Chores List Screen</Text>
          <View>
            <Cards
              onClicking={() => {
                props.navigation.navigate({ routeName: "ChoreDetails" });
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ChoresListScreen;
