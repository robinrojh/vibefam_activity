
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAGYk9DNtR5O2tUnIMo6o6TqbD3ZU_G8mI",
  authDomain: "vibefam-activity.firebaseapp.com",
  projectId: "vibefam-activity",
  storageBucket: "vibefam-activity.appspot.com",
  messagingSenderId: "866484755711",
  appId: "1:866484755711:web:5826ad0d7d1d41eda0c0ca"
};

const app = firebase.initializeApp(firebaseConfig);

const dbService = getFirestore(app)

export { dbService }