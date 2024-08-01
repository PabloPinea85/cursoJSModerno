const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Crea un metodo para el array
// recorre el array .forEach()
carrito.forEach((producto) =>
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
);

// Crea un array nuevo .map()
const nuevoArreglo2 = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);

// console.log(nuevoArreglo);
console.log(nuevoArreglo2);
