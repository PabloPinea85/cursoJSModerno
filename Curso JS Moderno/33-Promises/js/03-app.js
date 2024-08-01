const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

// then entonteces que vamos hacer
aplicarDescuento
  .then((resultado) => descuento(resultado))
  .catch((error) => console.log(error));

// Hay tres valores posibles
// Fulfilled - El promise se cumplio
// rejected - El promise no se cumplio
// pending - Nose ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
  console.log(mensaje);
}
