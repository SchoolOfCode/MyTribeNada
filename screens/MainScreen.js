import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import image from "../assets/image.jpeg";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {auth} from "react-native-firebase/auth";

function HomePage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup =  () => {
      console.log("Button clicked")
    auth.createUserWithEmailAndPassword(email, password)
     auth.then((userCredentials) => {
        const user = userCredentials.user;
        console.log("this is email", user.email);
      })
      .catch(error => alert(error.message))
  };
  return (
    <KeyboardAvoidingView style={styles.keyboard} behaviour="position">
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={{ paddingBottom: 110, paddingTop: 200 }}>
              <Text style={styles.text}>MyTribe</Text>
            </View>

            <TextInput
              placeholder="Username"
              textAlign="center"
              placeholderTextColor="black"
              textContentType="username"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              textAlign="center"
              placeholderTextColor="black"
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={styles.input}
              secureTextEntry
            />
            <View style={{ paddingTop: 10 }}>
             
                <Button
                  title="Log in"
                  backgroundColor="red"
                  borderColor="black"
                  style={{ paddingHorizontal: 100, borderRadius: 10 }}
                />
                <Button
                  title="Create Account"
                  onPress={handleSignup}
                  style={{
                    paddingHorizontal: 100,
                    padding: 10,
                    borderRadius: 10,
                  }}
                />
                <Button
                  title="Go to your chores"
                  style={{ paddingHorizontal: 100, borderRadius: 10 }}
                  onPress={() => {
                    props.navigation.navigate({ routeName: "ChoreList" });
                  }}
                />
             
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  keyboard: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#FEB800",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "white",
    textShadowRadius: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: "black",
    backgroundColor: "white",
  },
});

export default HomePage;
