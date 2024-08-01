// Modo Estricto
"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Congelar eses objeto en especifico
Object.freeze(producto)

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
console.log(producto);
// Para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));