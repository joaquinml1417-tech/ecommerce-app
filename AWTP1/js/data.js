const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
const base = isRoot ? "" : "../";
const imgBase = base + "images/";

export const navItems = [
  { title: "Home", url: base + "index.html" },
  { title: "Decoración", url: base + "pages/decoracion.html" },
  { title: "Tecnología", url: base + "pages/tecnologia.html" },
  { title: "Hogar", url: base + "pages/hogar.html" },
  { title: "Carrito", url: base + "pages/carrito.html", icon: imgBase + "carrito.svg" },
  { title: "Login", url: base + "pages/login.html" }
];

