import firebase from "firebase";
import { userData } from "./useState";

const firebaseConfig: object = {
  apiKey: "AIzaSyDsJfMGnGrAWKAGKm-sowLs1q_JfEGvF1Q",
  authDomain: "auth.edublocks.org",
  databaseURL: "https://edublocks-38d74.firebaseio.com",
  projectId: "edublocks-38d74",
  storageBucket: "edublocks-38d74.appspot.com",
  messagingSenderId: "1073955966212",
  appId: "1:1073955966212:web:b828491fbc775a2130d451",
  measurementId: "G-ELDZXSL916"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  userData.value = user;
});
