document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-logout")) {
      e.preventDefault();

      sessionStorage.clear();
      localStorage.removeItem("carrito"); 

      const currentPath = window.location.pathname;
      const isRoot = currentPath.endsWith("index.html") || currentPath === "/";
      const loginPath = isRoot ? "pages/login.html" : "../pages/login.html";

      window.location.href = loginPath;
    }
  });
});

