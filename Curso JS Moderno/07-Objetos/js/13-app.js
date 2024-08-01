const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};
// Object.keys te retorna un arreglo con las propiedades del objeto
// nombre, precio, disponible
console.log(Object.keys(producto));
// Object.values te retorna un arreglo con los valores de las propiedades del objeto
// Monitor 20 Pulgadas,300,true
console.log(Object.values(producto));
// Object.entries te retorna un arreglo con las propiedades del objeto
// [ 'nombre', 'Monitor 20 Pulgadas' ], [ 'precio', 300 ], [ 'disponible', true ]
console.log(Object.entries(producto));