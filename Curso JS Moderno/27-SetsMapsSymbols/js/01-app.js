// Set Los set son solo valores
// Los duplocados no son agregados al set
const carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");

// Elimina un valor del set
carrito.delete("Disco #2");

// Revisas si un valor existe en el set
console.log(carrito.has("Camisa"));

// Cuando mide
console.log(carrito.size);

// Elimina todos los elementos
// carrito.clear();

// Los set son iterables
carrito.forEach((producto) => {
  console.log(producto);
});

console.log(carrito);

// Del siguinete arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
