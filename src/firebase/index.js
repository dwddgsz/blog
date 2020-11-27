import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAMhG4gUMRK4KIXl-YPOCoTAgVp9BcOl2I",
    authDomain: "blog-3df52.firebaseapp.com",
    databaseURL: "https://blog-3df52.firebaseio.com",
    projectId: "blog-3df52",
    storageBucket: "blog-3df52.appspot.com",
    messagingSenderId: "687691688584",
    appId: "1:687691688584:web:62e3862fb46c4ed2374d3d",
    measurementId: "G-E2BKRSMD8Q"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
