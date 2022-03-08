import firebase from "firebase/app";
import "firebase/firestore";
let config = {
    apiKey: "AIzaSyAADB9Fw5JeB1_tEub3zv0F-wqvMs_frEQ",
    authDomain: "firestore-auth-22.firebaseapp.com",
  databaseURL: "https://firestore-auth-22.firebaseio.com",
  projectId: "firestore-auth-22",
  storageBucket: "firestore-auth-22.appspot.com",
  messagingSenderId: "505582826593",
  appId: "1:505582826593:web:80398d8f8df605c474a620"
};
firebase.initializeApp(config);
export default firebase.firestore();
