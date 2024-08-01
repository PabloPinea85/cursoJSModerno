const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// Reduce
// en el reduce primero se pasa el iniciador y segundo el objeto
// el inicializador se agrega al final
// Ej: total + producto.precio, 0
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

