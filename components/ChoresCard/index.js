import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
import { Text, Card } from "react-native-elements";
import washDish from "../../assets/washDish.png";
import vaccum from "../../assets/vaccum.png";
import { authentication } from "../../firebase/firebase-config";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore/lite";

const CardsComponentsProps = {};

function Cards(dataRecieved) {
  const [data, setData] = useState(false);
  console.log("This is what the Cards get", dataRecieved.dataRecieved[0]);
  const parsedData = dataRecieved.dataRecieved[0].user_data.map((el) =>
    JSON.parse(el)
  );
  console.log(parsedData);
  const {chores, members} = parsedData


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Divider />
        <Text style={styles.fonts} h2>
          {parsedData[0].chores[0].title}
        </Text>
        <Text style={styles.fonts} h4>
          {parsedData[0].members[0].name}
        </Text>
        <Text style={styles.text}>{parsedData[0].chores[0].description}</Text>
        <Text style={styles.text}>{parsedData[0].chores[0].dueDate}</Text>
        <Button title="Click to read more" />
      </Card>
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
