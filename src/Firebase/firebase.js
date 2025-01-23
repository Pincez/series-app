// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASb3zIuaJoRRnn-j2yw3LTTbe3mwUowQw",
  authDomain: "movie-web-fad2c.firebaseapp.com",
  projectId: "movie-web-fad2c",
  storageBucket: "movie-web-fad2c.appspot.com",
  messagingSenderId: "1067580757419",
  appId: "1:1067580757419:web:afd66dc3ee2e80b610aeee",
  measurementId: "G-29YV6J9Q96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
