
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/functions";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

const dbService = getFirestore(app)

export { dbService }