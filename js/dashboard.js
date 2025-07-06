import { db, auth } from "./firebase-config.js";
import {
  ref, onValue, push, remove, set
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
import {
  onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const tbody = document.getElementById("troopTable");
const form = document.getElementById("formTropa");

const tropaRef = ref(db, "tropas");

onValue(tropaRef, (snapshot) => {
  tbody.innerHTML = "";
  snapshot.forEach(child => {
    const t = child.val();
    const id = child.key;
    tbody.innerHTML += `
      <tr>
        <td>${t.nombre}</td>
        <td>${t.entrenamientos}</td>
        <td>${t.capacitaciones}</td>
        <td>${t.tryouts}</td>
        <td>${t.rolespj}</td>
        <td>${t.misiones}</td>
        <td>${t.miniroles}</td>
        <td>${t.resumen}</td>
        <td>${t.requisitos}</td>
        <td>${t.oficial}</td>
        <td><button onclick="deleteTropa('${id}')">🗑️</button></td>
      </tr>
    `;
  });
});

window.deleteTropa = (id) => {
  remove(ref(db, "tropas/" + id));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const newRef = push(tropaRef);
  set(newRef, data);
  form.reset();
});

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "login.html");
});
