import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC4T75KBDNeTub3y4BLOXSdf3W286-7uVM",
    authDomain: "fbclone-48d4f.firebaseapp.com",
    databaseURL: "https://fbclone-48d4f.firebaseio.com",
    projectId: "fbclone-48d4f",
    storageBucket: "fbclone-48d4f.appspot.com",
    messagingSenderId: "297464596489",
    appId: "1:297464596489:web:8b898f8296c9a2daf290d8",
    measurementId: "G-JJ68ZV6KZ3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;