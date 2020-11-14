import firebase from "firebase";
import { userData, files, switchMode, mode, isSaved, currentFileRef, filename } from "./useState";
import { closeModal } from "./useModalState";
import { setXml } from "@/components/blockly/Blockly";

const firebaseConfig: object = {
  apiKey: process.env.VUE_APP_API_KEY,
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

export const listFirebaseFiles = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    const ref = firebase.storage().ref(`blocks/${user.uid}`);
    ref.listAll().then(function(res) {
      const firebaseFiles = res.items.map(i => ({
        label: i.name,
        ref: i
      }));
      files.value = firebaseFiles;
    });
  } else {
    //No User
  }
};

export const openFirebaseFile = (fileRef: firebase.storage.Reference) => {
  if (fileRef.name.indexOf("(Python)") !== -1 && mode.value !== "Python") {
    switchMode("Python");
    filename.value = fileRef.name.replace(" (Python)", "");
  }
  else {
    filename.value = fileRef.name.replace(" (Python)", "");
  }
  if (fileRef.name.indexOf("(microbit)") !== -1 && mode.value !== "microbit") {
    switchMode("microbit");
    filename.value = fileRef.name.replace(" (microbit)", "");
  }
  else {
    filename.value = fileRef.name.replace(" (microbit)", "");
  }
  if (fileRef.name.indexOf("(RPi)") !== -1 && mode.value !== "RPi") {
    switchMode("RPi");
    filename.value = fileRef.name.replace(" (RPi)", "");
  }
  else {
    filename.value = fileRef.name.replace(" (RPi)", "");
  }
  if (
    fileRef.name.indexOf("(CircuitPython)") !== -1 &&
    mode.value !== "CircuitPython"
  ) {
    switchMode("CircuitPython");
    filename.value = fileRef.name.replace(" (CircuitPython)", "");
  }
  else {
    filename.value = fileRef.name.replace(" (CircuitPython)", "");
  }
  fileRef
    .getDownloadURL()
    .then(function(url) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "text";
      xhr.onload = function() {
        closeModal();
        setXml(xhr.responseText); 
        isSaved.value = true;
        currentFileRef.value = fileRef;
      };
      xhr.open("GET", url);
      xhr.send();
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteFile = (fileRef: firebase.storage.Reference) => {
  fileRef.delete();
  closeModal();
};
