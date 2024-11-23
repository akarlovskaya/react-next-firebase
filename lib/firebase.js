import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    authDomain: "react-next-firebase-b0bfe.firebaseapp.com",
    projectId: "react-next-firebase-b0bfe",
    storageBucket: "react-next-firebase-b0bfe.firebasestorage.app",
    messagingSenderId: "1055634983584",
    appId: "1:1055634983584:web:b168d6eb6c76a2dd4557c5",
    measurementId: "G-W054RHV0EJ"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();