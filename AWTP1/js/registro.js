formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = formRegistro.email.value.trim();
  const password = formRegistro.password.value.trim();

  if (!email || !password) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Ingresá un email válido.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Activar sesión
  sessionStorage.setItem("usuarioRegistrado", "true");
  sessionStorage.setItem("usuarioLogueado", "true");
  sessionStorage.setItem("mensajeLogin", "Registro exitoso. Sesión iniciada.");
  window.location.href = "../index.html";
});
