import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFLyfvjmJuWZIOIDFgk6LbznwFB47f86E",
  authDomain: "laundry-services-app.firebaseapp.com",
  projectId: "laundry-services-app",
  storageBucket: "laundry-services-app.appspot.com",
  messagingSenderId: "363438280953",
  appId: "1:363438280953:web:19707f4ad6500a85279228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };