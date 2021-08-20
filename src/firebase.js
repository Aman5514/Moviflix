import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbJjzeCuDoCKB6xw3AM58gDIyyx39-cn0",
    authDomain: "disney-plus-movies.firebaseapp.com",
    projectId: "disney-plus-movies",
    storageBucket: "disney-plus-movies.appspot.com",
    messagingSenderId: "548278133456",
    appId: "1:548278133456:web:c3aa39b352427a984774d5",
    measurementId: "G-YM7C97X9MB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  
  export {auth,provider};

 