import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(() => document.getElementById("error").style.display = "block");
});
