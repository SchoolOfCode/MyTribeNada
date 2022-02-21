import * as firebase from "react-native-firebase";
import  "react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: "****************************",
  authDomain: "****************************",
  projectId: "****************************",
  storageBucket: "****************************",
  messagingSenderId: "****************************",
  appId: "****************************",
};

const app = firebase.initializeApp(firebaseConfig);

export const fireDB = app.firestore();

export default app;
