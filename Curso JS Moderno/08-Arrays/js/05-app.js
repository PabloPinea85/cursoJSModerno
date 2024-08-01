// Creo el carrito vacio
const carrito = [];

// Definir un producto
const producto = {
  nombre: "Tablet",
  precio: 500,
};
const producto2 = {
  nombre: "Celular",
  precio: 200,
};
const producto3 = {
  nombre: "Audifonos",
  precio: 100,
};
// Forma imperativa
// Agrego el producto al carrito
carrito.push(producto);
carrito.push(producto2);
// Agrega el producto al inicio del carrito
carrito.unshift(producto3);
// Pasa el producto por la consola
console.table(carrito);
