// Modo Estricto
"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};
// freezze congela el objeto mientras que seal 
// Sellar el objeto en especifico
Object.seal(producto);
// Se puede modificar lo que existe en el objeto
producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.disponible;

console.log(producto);
console.log(Object.isSealed(producto));