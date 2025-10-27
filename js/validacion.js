document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email.includes("@") || email.length < 5) {
      alert("Por favor ingresá un email válido.");
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      e.preventDefault();
      return;
    }
  });
});
