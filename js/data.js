const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
const base = isRoot ? "" : "../";
const imgBase = base + "images/";

export const navItems = [
  { title: "Home", url: base + "index.html", icon: imgBase + "home.svg" },
  { title: "Decoración", url: base + "pages/decoracion.html", icon: imgBase + "decoracion.svg" },
  { title: "Tecnología", url: base + "pages/tecnologia.html", icon: imgBase + "tecnologia.svg" },
  { title: "Hogar", url: base + "pages/hogar.html", icon: imgBase + "hogar.svg" },
  { title: "Carrito", url: base + "pages/carrito.html", icon: imgBase + "carrito.svg" },
  { title: "Login", url: base + "pages/login.html", icon: imgBase + "login.svg" },
  { title: "Cerrar sesión", url: "#", class: "btn-logout", icon: imgBase + "logout.svg" }
];



