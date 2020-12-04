import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdTRymbhYoah-PczHCMol-QxxLulSmcds",
  authDomain: "storyhub-193c2.firebaseapp.com",
  databaseURL: "https://storyhub-193c2.firebaseio.com",
  projectId: "storyhub-193c2",
  storageBucket: "storyhub-193c2.appspot.com",
  messagingSenderId: "565437242793",
  appId: "1:565437242793:web:9ebc758da4c581503e38b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();