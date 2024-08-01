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
// Forma declarativa
// Agrega al carrito los productos
let resultado = [...carrito, producto]

resultado = [...resultado, producto2]
// En vez de usar unshift, cambiamos de posicion el producto que queremos agregar
resultado = [producto3, ...resultado]
// lo mostramos por consola
console.table(resultado);
