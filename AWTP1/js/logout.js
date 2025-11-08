document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Detectar si estás en index.html (raíz) o en pages/
      const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
      const loginPath = isRoot ? "pages/login.html" : "login.html";

      window.location.href = loginPath;
    });
  }
});
