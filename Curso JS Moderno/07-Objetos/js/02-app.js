const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
  };

console.log(producto);

// Acceder a las propiedades de dos formas diferentes
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["nombre"]);
