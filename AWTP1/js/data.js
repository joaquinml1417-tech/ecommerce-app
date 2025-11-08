const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
const base = isRoot ? "pages/" : "";
const imgBase = isRoot ? "images/" : "../images/";

export const navItems = [
  { title: "Home", url: isRoot ? "index.html" : "../index.html" },
  { title: "Decoración", url: base + "decoracion.html" },
  { title: "Tecnología", url: base + "tecnologia.html" },
  { title: "Hogar", url: base + "hogar.html" },
  { title: "Carrito", url: base + "carrito.html", icon: imgBase + "carrito.svg" },
  { title: "Logout", url: "#", id: "logout" }
];
