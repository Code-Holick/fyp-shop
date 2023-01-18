import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "online-shop-403d7.firebaseapp.com",
  projectId: "online-shop-403d7",
  storageBucket: "online-shop-403d7.appspot.com",
  messagingSenderId: "75831315416",
  appId: "1:75831315416:web:85497558fc3db9bbc080ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
