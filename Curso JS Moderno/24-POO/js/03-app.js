class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
  // No requiere una instancia
  static bienvenida() {
    return `Bienvenida al cajero`;
  }
}
// Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida() {
    return `Bienvenida al cajero de empresas `;
  }
}

// Instancia
const juan = new Cliente("Juan", 400);
const empresa = new Empresa("Código con juan", 500);
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
