const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  infomacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};
// Extraer por Destructuring
// Destructuring de objetos anidados
const {
  nombre,
  infomacion: { fabricacion: { pais } },
} = producto;

console.log(nombre);
console.log(pais);