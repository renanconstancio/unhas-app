import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyC6Bzu1bC-Mbp-N0IN8kRGef_5U8TvX3eA",
  // authDomain: "rocket-help-b9610.firebaseapp.com",
  // projectId: "rocket-help-b9610",
  // storageBucket: "rocket-help-b9610.appspot.com",
  // messagingSenderId: "669971153637",
  // appId: "1:669971153637:web:dfd0fce1168e7ad9ec8a0c",
  apiKey: "AIzaSyAX3FXlmpe-T8sF88toI8d9cnwOYDzj8xo",
  authDomain: "unhas-agenda.firebaseapp.com",
  databaseURL: "https://unhas-agenda-default-rtdb.firebaseio.com",
  projectId: "unhas-agenda",
  storageBucket: "unhas-agenda.appspot.com",
  messagingSenderId: "319277519667",
  appId: "1:319277519667:web:87832619ebd1bd88aa6446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
