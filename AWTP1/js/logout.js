document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const logoutBtn = document.getElementById("logout");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const currentPath = window.location.pathname;
        const isRoot = currentPath.endsWith("index.html") || currentPath === "/";
        const loginPath = isRoot ? "pages/login.html" : "../pages/login.html";

        window.location.href = loginPath;
      });
    }
  }, 100); 
});

