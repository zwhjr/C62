import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD5cEyiAbgqtVoA0UgzE6Bvg85RFc1I7R8",
  authDomain: "project-45d11.firebaseapp.com",
  databaseURL: "https://project-45d11-default-rtdb.firebaseio.com",
  projectId: "project-45d11",
  storageBucket: "project-45d11.appspot.com",
  messagingSenderId: "209755126401",
  appId: "1:209755126401:web:4b8034b0560e47776aab80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();
 

  