import { navItems } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  const logoPath = isRoot ? "images/Logo.jpg" : "../images/Logo.jpg";

  const navbar = document.createElement("div");
  navbar.className = "navbar";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="${logoPath}" alt="Logo Casa Nova" height="40">`;

  const links = document.createElement("div");
  links.className = "nav-links";

  navItems.forEach(item => {
    const link = document.createElement("a");

   link.href = item.url;
link.textContent = item.title;

if (item.icon) {
  link.innerHTML = `<img src="${item.icon}" alt="${item.title}" height="20"> ${item.title}`;
}
else {
      link.href = item.url;
      link.textContent = item.title;

      if (item.icon) {
        link.innerHTML = `<img src="${item.icon}" alt="${item.title}" height="20"> ${item.title}`;
      }

      if (item.id) {
        link.classList.add("logout-link");

      }
    }

    links.appendChild(link);
  });

  navbar.appendChild(logo);
  navbar.appendChild(links);
  document.body.prepend(navbar);
});

