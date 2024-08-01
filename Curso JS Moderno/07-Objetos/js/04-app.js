const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//   const nombre = producto.nombre
//   console.log(nombre);

// Destructuring para extraer propiedades
const { nombre, precio, disponible, noExiste } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);
