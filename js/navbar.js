import { navItems, imgBase } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const logoPath = imgBase + "logo.jpg"; // usa el mismo imgBase
  const usuarioLogueado = sessionStorage.getItem("usuarioLogueado") === "true";

  const navbar = document.createElement("div");
  navbar.className = "navbar";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="${logoPath}" alt="Logo Casa Nova" height="40">`;

  const links = document.createElement("div");
  links.className = "nav-links";

  const itemsFiltrados = navItems.filter(item => {
    if (item.title === "Login") return !usuarioLogueado;
    if (item.title === "Cerrar sesión") return usuarioLogueado;
    return true;
  });

  itemsFiltrados.forEach(item => {
    const link = document.createElement("a");
    link.href = item.url;

    if (item.icon && item.title !== "Cerrar sesión") {
      link.innerHTML = `<img src="${item.icon}" alt="${item.title}" height="20"> ${item.title}`;
    } else {
      link.textContent = item.title;
    }

    if (item.class) link.classList.add(item.class);
    links.appendChild(link);
  });

  navbar.appendChild(logo);
  navbar.appendChild(links);
  document.body.prepend(navbar);
});
