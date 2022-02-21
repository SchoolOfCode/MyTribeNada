import firebase from "react-native-firebase";

export function addChore(chore, addComplete) {
  firebase.firestore().collection("chores").add({
      Chores: chore.Chores,
      DueDate: chore.DueDate,
      FamilyMember: chore.FamilyMember,
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
  }).then((data) => addComplete(data))
  .catch((error) => console.log(error))
}

export function getChores(choresRetrived){
    const choreList = []
    const snapshot = await firebase.firestore()
    .collection("chores")
    .orderBy("createdAt")
    .get()
snapshot.forEach((doc) => {

})}
