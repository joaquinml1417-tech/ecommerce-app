fetch("data/productos.json")
  .then(res => res.json())
  .then(productos => {
    const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 5);
    const ofertas = productos.filter(p => p.precio < 8000).slice(0, 3);

    const contAleatorios = document.getElementById("productos-aleatorios");
    const contOfertas = document.getElementById("ofertas-destacadas");

    function crearCard(producto) {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img">
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <span class="price">$${producto.precio}</span>
        <button class="btn">Agregar al carrito</button>
      `;
      const boton = card.querySelector(".btn");
      boton.addEventListener("click", () => agregarAlCarrito(producto));
      return card;
    }

    aleatorios.forEach(p => contAleatorios.appendChild(crearCard(p)));
    ofertas.forEach(p => contOfertas.appendChild(crearCard(p)));
  });

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
