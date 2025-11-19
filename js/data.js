// Detecta el nombre del repo desde la URL
const pathParts = window.location.pathname.split("/");
const repo = pathParts[1]; // ej: "ecommerce-app"

export const base = repo ? `/${repo}/` : "./";
export const imgBase = base + "images/";

export const navItems = [
  { title: "Home", url: base + "index.html", icon: imgBase + "home.svg" },
  { title: "Decoración", url: base + "pages/decoracion.html", icon: imgBase + "decoracion.svg" },
  { title: "Tecnología", url: base + "pages/tecnologia.html", icon: imgBase + "tecnologia.svg" },
  { title: "Hogar", url: base + "pages/hogar.html", icon: imgBase + "hogar.svg" },
  { title: "Carrito", url: base + "pages/carrito.html", icon: imgBase + "carrito.svg" },
  { title: "Login", url: base + "pages/login.html", icon: imgBase + "login.svg" },
  { title: "Cerrar sesión", url: "#", class: "btn-logout", icon: imgBase + "logout.svg" }
];

