import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCS30kpblaE45Brppi1eoaWPYavs8j5Jw",
  authDomain: "st-elite-corps.firebaseapp.com",
  projectId: "st-elite-corps",
  storageBucket: "st-elite-corps.firebasestorage.app",
  messagingSenderId: "927235289442",
  appId: "1:927235289442:web:36c4dee9b5835f6961fc3b"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
