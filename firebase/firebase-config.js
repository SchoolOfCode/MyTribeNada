import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyB5ZfZ2zWbZHPQwpxUx1Kaxi_RCmQ2hVBE",
  authDomain: "mytribeapp-d64cc.firebaseapp.com",
  projectId: "mytribeapp-d64cc",
  storageBucket: "mytribeapp-d64cc.appspot.com",
  messagingSenderId: "586738653018",
  appId: "1:586738653018:web:a2e6f02b8dc9d45b634563",
  measurementId: "G-H074E0RYKE",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const authentication = getAuth(app)

//Get a list of chores from your database


  async function getChores(db) {
    const choresCol = collection(db, "chores");
    const choreSnapshot = await getDocs(choresCol);
    const choresList = choreSnapshot.docs.map((doc) => doc.data());
    return choresList;
  }



