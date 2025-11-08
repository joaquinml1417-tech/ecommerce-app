document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingresá un email válido.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    sessionStorage.setItem("usuarioLogueado", "true");
    sessionStorage.setItem("mensajeLogin", "Sesión iniciada correctamente.");

    window.location.href = "../index.html";
  });
});
