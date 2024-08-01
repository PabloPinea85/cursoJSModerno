const pendientes = ["Tarea", "Comer", "Probar"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// for of
for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}