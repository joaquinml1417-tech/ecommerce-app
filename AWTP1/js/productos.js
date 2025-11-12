fetch("data/productos.json")
  .then(res => res.json())
  .then(productos => {
    const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 5);
    const ofertas = productos.filter(p => p.precio < 8000).slice(0, 3);

    const contAleatorios = document.getElementById("productos-aleatorios");
    const contOfertas = document.getElementById("ofertas-destacadas");

    aleatorios.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <span class="price">$${p.precio}</span>
        <button class="btn" onclick='agregarAlCarrito(${JSON.stringify(p)})'>Agregar al carrito</button>
      `;
      contAleatorios.appendChild(card);
    });

    ofertas.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <span class="price">$${p.precio}</span>
        <button class="btn" onclick='agregarAlCarrito(${JSON.stringify(p)})'>Agregar al carrito</button>
      `;
      contOfertas.appendChild(card);
    });
  });


