// Operador Mayor que y menor que

const dinero = 100;
const totalAPagar = 600;
const tarjeta = true;
const cheque = false;

if (dinero >= totalAPagar) {
  console.log("Dinero suficiente");
} else if (cheque) {
  console.log("Puedes pagar con cheque");
} else if (tarjeta) {
  console.log("Puedes pagar con tarjeta");
} else {
  console.log("Fondos insuficientes");
}
