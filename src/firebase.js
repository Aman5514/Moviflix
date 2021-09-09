import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
     use your own firebase configuration
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  
  export {auth,provider};

 
