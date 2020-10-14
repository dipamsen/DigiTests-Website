import firebase from "firebase"
import "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJkm-Ys9dc5im1WXgd5iVVt6z6xMlb9Ik",
  authDomain: "digitests-e9230.firebaseapp.com",
  databaseURL: "https://digitests-e9230.firebaseio.com",
  projectId: "digitests-e9230",
  storageBucket: "digitests-e9230.appspot.com",
  messagingSenderId: "1002705129248",
  appId: "1:1002705129248:web:2cf259f51c28f6cb58d145"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db