// Lleva un * al inicio para ser un generador
function* crearGenerador() {
  yield 1;
  yield "Juan";
  yield 3 + 3;
  yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value); // lo despierta al iterador
// console.log(iterador.next().done); // lo despierta al iterador
// console.log(iterador.next().value); // lo despierta al iterador
// console.log(iterador.next()); // ya no encuentra valores
// console.log(iterador.next()); // lo termina de cerrar

// console.log(iterador);

// Generador para carrito de compras
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

