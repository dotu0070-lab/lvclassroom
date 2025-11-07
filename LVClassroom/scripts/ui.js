// scripts/ui.js
export function handleFormSubmit(formSelector, callback) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;
    callback(email, password);
  });
}