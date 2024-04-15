// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvZAJs-TEfdFPn8IVFS1qIlxMmkPr3zRI",
  authDomain: "gt-digital-games-e0d11.firebaseapp.com",
  projectId: "gt-digital-games-e0d11",
  storageBucket: "gt-digital-games-e0d11.appspot.com",
  messagingSenderId: "853850569082",
  appId: "1:853850569082:web:c4ac95c97da0b783e47ec3",
  measurementId: "G-31CWQHD5TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);