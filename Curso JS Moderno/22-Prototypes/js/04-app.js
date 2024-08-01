function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo = retira;
};

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo); // se Utiliza .call() Para heredar constructor en este caso de Cliente
  this.telefono = telefono;
}
// si quieres heredar las funciones(antes de crear una instancia)
// Pasamos todo el prototype de Cliente a Persona.
// Object.create es una funcion para crear
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona("Juan", 5000, 2616462330);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El Teléfono de esta persona es ${this.telefono}`;

};

console.log(juan.mostrarTelefono());
