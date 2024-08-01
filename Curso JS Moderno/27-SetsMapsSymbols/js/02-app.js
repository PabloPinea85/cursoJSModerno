//weakSet
// Solo aceptan objetos no otro valor
// la diferencia del WeakSet al Set que el primero solo acepta objeto el otro todos los valores
const weakSet = new WeakSet();

const cliente = {
  nombre: "Juan",
  saldo: 100,
};

// const nombre = "Juan";

weakSet.add(cliente);
// weakSet.add(nombre);

// console.log(weakSet.has(cliente));

// weakSet.delete(cliente);

console.log(carrito.size);

console.log(weakSet);
