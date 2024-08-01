const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {
  console.log("Si puedes pagar");
} else if (!puedePagar && !usuario) {
  console.log("No puedes pagar");
} else if (!usuario) {
  console.log("Inicia sesión o saca una cuenta");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
} else {
    console.log("Ocurrio un error");
}
