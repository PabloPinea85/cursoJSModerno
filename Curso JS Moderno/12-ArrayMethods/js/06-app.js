const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// en .every todos los elementos deben cumplir la condicion para que devuelva true
// caso contrario false
const resultado = carrito.every((producto) => (producto.precio = 1000));
console.log(resultado);

const resutlado2 = carrito.some((producto) => (producto.precio = 1000));
console.log(resutlado2);