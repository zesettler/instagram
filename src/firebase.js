import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_YZ44Rh44bw_zmfsQtRRiYiU52j09fuU",
  authDomain: "inst-clone-41f12.firebaseapp.com",
  projectId: "inst-clone-41f12",
  storageBucket: "inst-clone-41f12.appspot.com",
  messagingSenderId: "861467227375",
  appId: "1:861467227375:web:6b248def40781ea4a8571a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();