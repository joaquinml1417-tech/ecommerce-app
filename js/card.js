document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  const titulo = document.title.toLowerCase();
  let categoria = "";

  if (titulo.includes("decoración")) categoria = "decoracion";
  else if (titulo.includes("tecnología")) categoria = "tecnologia";
  else if (titulo.includes("hogar")) categoria = "hogar";

  fetch("../data/productos.json")
    .then(res => res.json())
    .then(productos => {
      const logueado = sessionStorage.getItem("usuarioLogueado") === "true";
      const filtrados = productos.filter(p => p.categoria === categoria);

      filtrados.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        let contenido = `
          <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
          <h3>${p.titulo}</h3>
          <p>${p.descripcion}</p>
          <span class="price">$${p.precio}</span>
        `;

        if (logueado) {
          contenido += `
            <div class="cantidad">
              <button class="btn-restar">-</button>
              <input type="number" value="1" min="1" class="input-cantidad">
              <button class="btn-sumar">+</button>
            </div>
          `;
        }

        card.innerHTML = contenido;

        const boton = document.createElement("button");
        boton.className = "btn";
        boton.textContent = "Agregar al carrito";

        if (logueado) {
          const inputCantidad = card.querySelector(".input-cantidad");
          const btnSumar = card.querySelector(".btn-sumar");
          const btnRestar = card.querySelector(".btn-restar");

          btnSumar.addEventListener("click", () => {
            inputCantidad.value = parseInt(inputCantidad.value) + 1;
          });

          btnRestar.addEventListener("click", () => {
            if (parseInt(inputCantidad.value) > 1) {
              inputCantidad.value = parseInt(inputCantidad.value) - 1;
            }
          });

          boton.addEventListener("click", () => {
            const cantidad = parseInt(inputCantidad.value);
            agregarAlCarrito({ ...p, cantidad });
          });
        } else {
          boton.addEventListener("click", () => {
            alert("Debés iniciar sesión para añadir productos al carrito.");
            window.location.href = "../pages/login.html";
          });
        }

        card.appendChild(boton);
        grid.appendChild(card);
      });
    });
});

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const existente = carrito.find(p => p.id === producto.id);

  if (existente) {
    existente.cantidad += producto.cantidad || 1;
  } else {
    carrito.push({ ...producto });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`"${producto.titulo}" fue agregado al carrito`);
}
