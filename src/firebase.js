import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3u676qctK-_6NlLn1HMn2KD3oca5LEJ0",
  authDomain: "facebook-messenger-clone-wdn.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-wdn.firebaseio.com",
  projectId: "facebook-messenger-clone-wdn",
  storageBucket: "facebook-messenger-clone-wdn.appspot.com",
  messagingSenderId: "699122024320",
  appId: "1:699122024320:web:18dba2a2913e6c89264b65",
  measurementId: "G-SXYK8Y7TWR"
})

const db = firebaseApp.firestore();

export { db };