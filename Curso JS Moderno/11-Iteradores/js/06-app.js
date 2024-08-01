const pendiente = ["Tarea", "Comer", "Proyecto", "Estudiar"];

pendiente.forEach((pendiente, indice) =>
  console.log(`${indice}: ${pendiente}`)
);

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

const nuevoArreglo = carrito.forEach((producto) =>
  console.log(producto.nombre)
);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
