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

        // Contenido base
        let contenido = `
          <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
          <h3>${p.titulo}</h3>
          <p>${p.descripcion}</p>
          <span class="price">$${p.precio}</span>
        `;

        if (logueado) {
          contenido += `
            <div class="cantidad">
              <button>-</button>
              <input type="number" value="1" min="1">
              <button>+</button>
            </div>
          `;
        }

        card.innerHTML = contenido;

        const boton = document.createElement("button");
        boton.className = "btn";
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          if (!logueado) {
            alert("Debés iniciar sesión para añadir productos al carrito.");
            window.location.href = "../pages/login.html";
          } else {
            console.log(`Producto ${p.titulo} añadido al carrito`);
          }
        });

        card.appendChild(boton);
        grid.appendChild(card);
      });
    });
});

