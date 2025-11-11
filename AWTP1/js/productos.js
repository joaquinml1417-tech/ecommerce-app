[
  {
    "id": 1,
    "categoria": "decoracion",
    "titulo": "Cuadro Abstracto",
    "descripcion": "Ideal para salas modernas. Marco de madera natural.",
    "precio": 4500,
    "imagen": "../images/cuadro.webp"
  },
  {
    "id": 2,
    "categoria": "decoracion",
    "titulo": "Lámpara Vintage",
    "descripcion": "Diseño retro con luz cálida. Base metálica.",
    "precio": 6200,
    "imagen": "../images/lampara.webp"
  },
  {
    "id": 3,
    "categoria": "decoracion",
    "titulo": "Textil Bohemio",
    "descripcion": "Estilo étnico, ideal para sillones o paredes.",
    "precio": 3800,
    "imagen": "../images/textil.webp"
  },
  {
    "id": 4,
    "categoria": "tecnologia",
    "titulo": "Auriculares Bluetooth",
    "descripcion": "Compactos, con estuche de carga. Ideales para música y llamadas.",
    "precio": 9800,
    "imagen": "../images/auriculares.webp"
  },
  {
    "id": 5,
    "categoria": "tecnologia",
    "titulo": "Smartwatch Huawei GT",
    "descripcion": "Pantalla AMOLED. Control de actividad y estilo ejecutivo.",
    "precio": 22500,
    "imagen": "../images/smartwatch.webp"
  },
  {
    "id": 6,
    "categoria": "tecnologia",
    "titulo": "Silla Ergonómica",
    "descripcion": "Respaldo alto, diseño cómodo. Ideal para home office.",
    "precio": 12400,
    "imagen": "../images/silla.webp"
  },
{
  "id": 7,
  "categoria": "hogar",
  "titulo": "Sillón Moderno",
  "descripcion": "Tapizado gris con patas doradas. Ideal para salas de estar.",
  "precio": 18900,
  "imagen": "../images/sillon.webp"
},
{
  "id": 8,
  "categoria": "hogar",
  "titulo": "Mesa Auxiliar",
  "descripcion": "Diseño moderno de madera. Ideal para comedor familiar.",
  "precio": 7500,
  "imagen": "../images/mesa.webp"
},
{
  "id": 9,
  "categoria": "hogar",
  "titulo": "Silla Madera",
  "descripcion": "Diseño moderno con respaldo alto. Ideal para comedor.",
  "precio": 12400,
  "imagen": "../images/sillamadera.webp"
},
fetch("data/productos.json")
  .then(res => res.json())
  .then(productos => {
    const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 5);
    const ofertas = productos.filter(p => p.precio < 8000).slice(0, 3);

    const contAleatorios = document.getElementById("productos-aleatorios");
    const contOfertas = document.getElementById("ofertas-destacadas");

    [...aleatorios].forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <span class="price">$${p.precio}</span>
        <button class="btn">Agregar al carrito</button>
      `;
      contAleatorios.appendChild(card);
    });

    [...ofertas].forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="product-img">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <span class="price">$${p.precio}</span>
        <button class="btn">Agregar al carrito</button>
      `;
      contOfertas.appendChild(card);
    });
  })

]
