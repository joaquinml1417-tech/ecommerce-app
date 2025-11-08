import { navItems } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.createElement("div");
  navbar.className = "navbar";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../images/Logo.jpg" alt="Logo Casa Nova" height="40">`;

  const links = document.createElement("div");
  links.className = "nav-links";

  navItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.title;

    if (item.icon) {
      link.innerHTML = `<img src="${item.icon}" alt="${item.title}" height="20"> ${item.title}`;
    }

    if (item.id) {
      link.id = item.id;
    }

    links.appendChild(link);
  });

  navbar.appendChild(logo);
  navbar.appendChild(links);
  document.body.prepend(navbar);
});
