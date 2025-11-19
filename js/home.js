document.addEventListener("DOMContentLoaded", () => {
  const logueado = sessionStorage.getItem("usuarioLogueado") === "true";
  const mensajeLogin = sessionStorage.getItem("mensajeLogin");

  const botonRegistro = document.querySelector(".btn");
  const mensaje = document.getElementById("mensaje-bienvenida");

  // Mostrar mensaje de login si existe
  if (mensajeLogin) {
    alert(mensajeLogin);
    sessionStorage.removeItem("mensajeLogin");
  }

  // Si el usuario está logueado, ocultar botón de registro y mostrar productos destacados
  if (logueado) {
    if (botonRegistro) botonRegistro.style.display = "none";
    if (mensaje) {
      mensaje.textContent = "Bienvenido de nuevo. Explorá nuestras categorías y descubrí productos para tu hogar y vida digital.";
    }

    fetch("data/productos.json")
      .then(res => res.json())
      .then(productos => renderProductosHome(productos))
      .catch(err => console.error("Error cargando productos del home:", err));
  }

  // Renderizar barra scroll con productos aleatorios
  fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => renderScroll(productos))
    .catch(err => console.error("Error cargando productos scroll:", err));

  initScrollControls();
});

// Renderiza productos destacados en el home (2 por categoría)
function renderProductosHome(productos) {
  const categorias = ["decoracion", "tecnologia", "hogar"];
  const contenedor = document.getElementById("productos-home");

  categorias.forEach(cat => {
    const grupo = productos.filter(p => p.categoria === cat).slice(0, 2);
    grupo.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <span class="price">$${p.precio}</span>
        <button class="btn">Agregar al carrito</button>
      `;
      card.querySelector(".btn").addEventListener("click", () => agregarAlCarrito(p));
      contenedor.appendChild(card);
    });
  });
}

// Renderiza barra scroll con 8 productos aleatorios
function renderScroll(productos) {
  console.log("Renderizando scroll con:", productos); // debug
  const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 8);
  const contenedorScroll = document.getElementById("scroll-productos");

  contenedorScroll.innerHTML = "";

  aleatorios.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <span class="price">$${p.precio}</span>
    `;
    contenedorScroll.appendChild(card);
  });
}

// Controles de scroll lateral
function initScrollControls() {
  document.getElementById("scroll-left").addEventListener("click", () => {
    document.getElementById("scroll-productos").scrollBy({ left: -300, behavior: "smooth" });
  });
  document.getElementById("scroll-right").addEventListener("click", () => {
    document.getElementById("scroll-productos").scrollBy({ left: 300, behavior: "smooth" });
  });
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const existente = carrito.find(p => p.id === producto.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`"${producto.titulo}" fue agregado al carrito`);
}


