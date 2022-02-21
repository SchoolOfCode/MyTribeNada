import  React , {useState } from "react";
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
import { Text, Card,Icon } from "react-native-elements";
import washDish from "../../assets/washDish.png"
import vaccum from "../../assets/vaccum.png"

const chores = [
  {
    ChoresTitle: "Wash dishes",
    FamilyMember: "Nour Amara",
    avatar: washDish, 
    DueDate: "29 / 09 / 2022",
    Description: "Clean all the dishes in the sink",
    Completed: true,
  },
  {
    ChoresTitle: "Vaccum",
    FamilyMember: "Huzaifah Begg",
    avatar: vaccum,
    DueDate: "29 / 10 / 2022",
    Description: "Vaccum your room ",
    Completed: true,
  },
];

const CardsComponentsProps = {};

function Cards(onClicking) {
    console.log("this is what is passed", onClicking)
  //   const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>

          {chores.map((c, i) => {
            return (
              <View key={i} style={styles.main}>
                <Card style={styles.card}>
                  <Card.Divider />
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={c.avatar}
                  />
                  <Text style={styles.fonts} h2>
                    {c.ChoresTitle}
                  </Text>
                  <Text style={styles.fonts} h4>
                    {c.FamilyMember}
                  </Text>
                  <Text style={styles.text}>{c.DueDate}</Text>
                  <Text style={styles.text}>{c.Description}</Text>
                  <Text style={styles.text}>{c.Completed}</Text>
                  <Button key = {i}
                    title="Click to read more" onPress={onClicking.onClicking}
                  />
                </Card>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
    alignContent: "center"
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