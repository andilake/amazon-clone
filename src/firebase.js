import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-hl3WKD3KBEaOGRIx5DfucKoauz0_lKs",
    authDomain: "clone-c1075.firebaseapp.com",
    databaseURL: "https://clone-c1075.firebaseio.com",
    projectId: "clone-c1075",
    storageBucket: "clone-c1075.appspot.com",
    messagingSenderId: "362420306740",
    appId: "1:362420306740:web:e72c88605300b1bc1f9b61",
    measurementId: "G-W48FFDDK01"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };