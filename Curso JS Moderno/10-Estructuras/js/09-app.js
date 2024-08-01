const autenticado = true;
const puedePagar = true;
// Para operadores ternarios
console.log(autenticado && puedePagar ? "Autenticado" : "No autenticado");

// ternario anidado
console.log(
  autenticado
    ? puedePagar
      ? "Si esta autenticado y puede"
      : "Si autenticado, no puede pagar"
    : " No autenticado"
);

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;
// if anidado
// if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
//   if (efectivo > totalPagar) {
//     console.log("Pago en efectivo");
//   } else {
//     console.log("Otra forma de pago");
//   }
// } else {
//   console.log("No puedes pagar");
// }
