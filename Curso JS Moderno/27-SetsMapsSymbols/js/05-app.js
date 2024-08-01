// Nunca un simbolo es igual a otro
const sym = Symbol("1");
const sym2 = Symbol("1");

// if (sym === sym2) {
//   console.log("Son iguales!!");
// } else {
//   console.log("Son Diferentes");
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido  como llaves deel objeto
persona[nombre] = "Pablo";
persona[apellido] = "Pinea";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

// las propiedades qeu utilizan symbol no son iterables

for (let i in persona) {
  console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del cliente");
const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
