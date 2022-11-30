import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdp5xAOxdc6Moq5OkNiwTC6ufFtQjLOIQ",
  authDomain: "teamproject-2e3b6.firebaseapp.com",
  projectId: "teamproject-2e3b6",
  storageBucket: "teamproject-2e3b6.appspot.com",
  messagingSenderId: "32230790094",
  appId: "1:32230790094:web:06f6e89135bc18b2ab119f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }
