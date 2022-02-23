import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, } from "react-native";
import Cards from "../components/ChoresCard";
import image from "../assets/image.jpeg"

// let dataRecieved = props.route.params.data

function ChoresListScreen(props) {
console.log("this is the ChoresListScreen props", props)

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>Chores List Screen</Text>
        <View>
          <Cards
            dataRecieved={props.navigation.getParam("info")}
            onClicking={() => {
              props.navigation.navigate({ routeName: "ChoreDetails" });
            }}
          />
        </View>
      </ImageBackground>
    </View>
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
