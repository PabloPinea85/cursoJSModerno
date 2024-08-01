import nuevaFuncion from "./cliente.js";
import { Empresa } from "./empresa.js";
import {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";

// al ir fuera de las llaves puede ir sin nombre o difetente nombre
nuevaFuncion();
console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

// Importar empresa
const empresa = new Empresa("Codigo con Juan", 100, "Aprendizaje minimo");
console.log(empresa.mostrarInformacion());
