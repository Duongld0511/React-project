
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyABm7z18B-tGLTvWZqBAMuqEwyQEKiBm4k",
  authDomain: "reactjs-b4c0d.firebaseapp.com",
  projectId: "reactjs-b4c0d",
  storageBucket: "reactjs-b4c0d.appspot.com",
  messagingSenderId: "539276098005",
  appId: "1:539276098005:web:054826336253d09ea3655c"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage()