const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, index) => {
  if (mes === "Abril") {
    console.log(`Encontrado en el indice ${index}`);
  }
});

// Encontrar el indice de abril
// metodo para retornar el indice de algo en numero
// si no aparece lo pone como -1
const indice = meses.findIndex((mes) => mes === "Abril");

console.log(indice);

// Encontar un indice de un arreglo de objetos
// Devuelve el primer elemento que encuentre
const indice2 = carrito.findIndex((producto) => producto.precio === 100);
console.log(indice2);
