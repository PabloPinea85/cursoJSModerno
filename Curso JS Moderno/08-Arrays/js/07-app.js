// Declarativa va modificar el objeto actual y la imperativa no va
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
const producto4 = {
  nombre: "Teclado",
  precio: 50,
};
const producto5 = {
  nombre: "Mouse",
  precio: 30,
};
// Forma declarativa
// Agrega al carrito los productos
let resultado = [...carrito, producto];

resultado = [...resultado, producto2];
// En vez de usar unshift, cambiamos de posicion el producto que queremos agregar
resultado = [producto3, ...resultado];
resultado = [...resultado, producto4];
resultado = [...resultado, producto5];

// lo mostramos por consola
console.table(resultado);

// Eliminar ultimo elemento de un arreglo
// .pop() elimina del final del arreglo
resultado.pop();

console.table(resultado);

// Eliminar primer elemento de un arreglo
resultado.shift();

console.table(resultado);

// Eliminar un elemento de un arreglo
// El primero elige el indice y el segundo la cantidad
resultado.splice(1, 1);
console.table(resultado);