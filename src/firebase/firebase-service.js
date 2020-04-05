import firebase from "firebase/app";
import "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1xNW41Q4z05UGGd8XBSh4KTJt-zFLu74",
  authDomain: "firechat-25cc0.firebaseapp.com",
  databaseURL: "https://firechat-25cc0.firebaseio.com",
  projectId: "firechat-25cc0",
  storageBucket: "firechat-25cc0.appspot.com",
  messagingSenderId: "108171578756",
  appId: "1:108171578756:web:822257becf7d165b69a1d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const mFirebaseStorage = firebase.storage();

export default firebase;
