const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 141, 102]);
const datos = new Map();

datos.set("nombre", "Juan");
datos.set("profesion", "Desarrollador web");

//Default
for (let ciudad of ciudades) {
  console.log(ciudad);
}

for (let orden of ordenes) {
  console.log(orden);
}

for (let dato of datos) {
  console.log(dato);
}
// // Keys Iteratos
// for (let keys of ciudades.keys()) {
//   console.log(keys);
// }

// for (let keys of ordenes.keys()) {
//   console.log(keys);
// }

// for (let keys of datos.keys()) {
//   console.log(keys);
// }
// // Values Iterato
// for (let values of ciudades.values()) {
//   console.log(values);
// }

// for (let values of ordenes.values()) {
//   console.log(values);
// }

// for (let values of datos.values()) {
//   console.log(values);
// }

// // Entries Iterator
// for (let entry of ciudades.entries()) {
//   console.log(entry);
// }

// for (let entry of ordenes.entries()) {
//   console.log(entry);
// }

// for (let entry of datos.entries()) {
//   console.log(entry);
// }
