import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBs7jW4U35AWinvbeJlheup_v0Xd-QRApo",
    authDomain: "vagapcd-6c120.firebaseapp.com",
    databaseURL: "https://vagapcd-6c120.firebaseio.com/",
    projectId: "vagapcd-6c120",
    storageBucket: "vagapcd-6c120.appspot.com",
    messagingSenderId: "214082547809",
    appId: "1:214082547809:web:e17e12ac6a35fd154a7a20"
};

try {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.firestore();
} catch (e) {
  console.log('O App recarregou');
}

export default firebase;
