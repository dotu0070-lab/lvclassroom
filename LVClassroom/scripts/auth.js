// scripts/auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// --- Đăng ký ---
export async function signup(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Đăng ký thành công!");
    window.location.href = "lvclassroom.html";
  } catch (err) {
    alert("Lỗi: " + err.message);
  }
}

// --- Đăng nhập ---
export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "lvclassroom.html";
  } catch (err) {
    alert("sai thông tin, vui lòng kiểm tra lại: " + err.message);
  }
}

// --- Đăng xuất ---
export async function logout() {
  await signOut(auth);
  window.location.href = "index.html";
}

// --- Kiểm tra trạng thái đăng nhập ---
onAuthStateChanged(auth, user => {
  if (window.location.pathname.endsWith("lvclassroom.html") && !user) {
    window.location.href = "login.html";
  }
});