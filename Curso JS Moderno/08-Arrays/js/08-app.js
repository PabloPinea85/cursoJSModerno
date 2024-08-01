const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];
// En los arreglos se empiezan a contar desde 0
const [primero, segundo, ...tercero] = numeros;

console.log(tercero);
