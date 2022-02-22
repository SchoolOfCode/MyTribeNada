import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
import { Text, Card } from "react-native-elements";
import washDish from "../../assets/washDish.png";
import vaccum from "../../assets/vaccum.png";
import { authentication } from "../../firebase/firebase-config";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore/lite";

const CardsComponentsProps = {};

function Cards(onClicking) {
  const [data, setData] = useState(false);

  async function getData() {
    console.log("This function has been fired");
    const choresCol = collection(db, "MyTribe");
    const choreSnapshot = await getDocs(choresCol);
    const choresList = choreSnapshot.docs.map((doc) => doc.data());
    console.log("This is the data", choresList[0].Description);
    setData(choresList)
    return data;
  }

  return (
    <View>

      <Button title= "get Data" onPress={getData} />
      {/* {setData === false ? (
        <Button title="Get Data" onPress={getData} />
      ) : (

        <View style={styles.container}>
          {/* {data.map((c, i) => {
            return (
              <View key={i} style={styles.main}>
                <Card style={styles.card}>
                  <Card.Divider />
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={c.ImageUrl}
                  />
                  <Text style={styles.fonts} h2>
                    {c.chores.map((t) => {
                      return t;
                    })}
                  </Text>
                  <Text style={styles.fonts} h4>
                    {c.family_member((m) => {
                      return m;
                    })}
                  </Text>
                  <Text style={styles.text}>{c.DueDate}</Text>
                  <Text style={styles.text}>
                    {c.Description.map((m) => {
                      return m;
                    })}
                  </Text>
                  <Button
                    key={i}
                    title="Click to read more"
                    onPress={onClicking.onClicking}
                  />
                </Card> */}
              </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  fonts: {
    marginBottom: 8,
  },
  main: {
    flex: 1,
    marginBottom: 6,
    marginLeft: 50,
    justifyContent: "center",
  },
  card: {
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  image: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Cards;

{
  /* <View>
                    <Checkbox
                      value={isSelected}
                      onChange={setSelection}
                      style={styles.checkbox}
                    />
                    <Text>Do you like React Native?</Text>
                  </View>
                  <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */
}
