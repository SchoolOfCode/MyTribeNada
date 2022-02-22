import React, { useState } from "react";
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
import { Text, Button } from "react-native-elements";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { authentication } from "../firebase/firebase-config";

function HomePage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedin, setIsSignedin] = useState(false);

  const SigninUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSignedin(true);
      })
      .catch((error) => console.log(error));
  };
  const SignOutUser = () => {
    signOut(authentication, email, password)
      .then((re) => {
        setIsSignedin(false);
      })
      .catch((error) => console.log(error));
  };

  const RegisterUser = () => {
    console.log("Button clicked");
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        setIsSignedin(true);
      })
      .catch((error) => console.log(error));
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
              placeholder="Email"
              textAlign="center"
              placeholderTextColor="black"
              textContentType="emailAddress"
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
              secureTextEntry={true}
            />
            {isSignedin === true ? (
            <View><Button
              title="Go to your chores"
              style={{ paddingHorizontal: 100, borderRadius: 10 }}
              onPress={() => {
                props.navigation.navigate({ routeName: "ChoreList" });
              }}
            />
              <Button
                title="Log out"
                style={{
                  paddingHorizontal: 100,
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={SignOutUser}
              />
              </View>
            ) : (
              <View style={{ paddingTop: 10 }}>
                <Button
                  title="Log in"
                  style={{
                    paddingHorizontal: 100,
                    padding: 10,
                    borderRadius: 10,
                  }}
                  onPress={SigninUser}
                />
                <Button
                  title="Create Account"
                  backgroundColor="red"
                  borderColor="black"
                  onPress={RegisterUser}
                  style={{ paddingHorizontal: 100, borderRadius: 10 }}
                />
              </View>
            )}

            
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
