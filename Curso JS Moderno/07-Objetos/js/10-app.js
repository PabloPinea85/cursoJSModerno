const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);
// Assign unifica dos objetos
const resultado = Object.assign(producto, medidas);
// Spread Operator o Rest Operator
// Crea una copia de un objeto
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
