import { navItems } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const logoPath = "/ecommerce-app/images/logo.jpg";
  const usuarioLogueado = sessionStorage.getItem("usuarioLogueado") === "true";

  const navbar = document.createElement("div");
  navbar.className = "navbar";

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="${logoPath}" alt="Logo Casa Nova" height="40">`;

  // Links
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

    if (item.class) {
      link.classList.add(item.class);
    }

    links.appendChild(link);
  });

  navbar.appendChild(logo);
  navbar.appendChild(links);
  document.body.prepend(navbar);
});


    <h1>Bienvenido a <span class="highlight">Casa Nova</span></h1>
    <p id="mensaje-bienvenida">Explorá nuestros productos o registrate para comenzar.</p>
    <a class="btn" href="pages/registro.html">Ir al registro</a>

    <!-- Sección destacado -->
    <div class="destacado">
      <h3>¡Descubrí lo nuevo!</h3>
      <p>Productos seleccionados para transformar tu hogar con estilo y tecnología.</p>
    </div>

    <!-- Promo Visa -->
    <div class="promo-tarjeta">
      <img src="images/promo-visa.webp" alt="Promo Visa" class="promo-img">
      <div class="promo-texto">
        <h3>12 cuotas sin interés con Visa</h3>
        <p>En productos seleccionados de hogar y tecnología. ¡Aprovechá ahora!</p>
        <a href="pages/tecnologia.html" class="btn">Ver productos</a>
      </div>
    </div>

    <!-- Barra scroll -->
    <div class="barra-scroll">
      <h3>Inspirate con estos productos</h3>
      <div class="scroll-controls">
        <button id="scroll-left" class="scroll-btn">◀</button>
        <button id="scroll-right" class="scroll-btn">▶</button>
      </div>
      <div id="scroll-productos" class="scroll-container"></div>
    </div>

    <!-- Productos destacados -->
    <div id="productos-home" class="product-grid"></div>
  </div>

  <!-- Scripts -->
  <script src="js/logout.js"></script>
  <script src="js/home.js"></script>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Casa Nova. Todos los derechos reservados.</p>
    <p>Contacto: info@casanova.com.ar</p>
  </footer>
</body>
</html>





