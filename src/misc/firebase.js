import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyDFgh48Dzyx2Tq1HDK328IKoscOwROwVc8",
  authDomain: "chat-web-app-3012.firebaseapp.com",
  projectId: "chat-web-app-3012",
  storageBucket: "chat-web-app-3012.appspot.com",
  messagingSenderId: "512645540629",
  appId: "1:512645540629:web:f9744d887f6610d4c8971c",
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
