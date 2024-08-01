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
// Instancia
const juan = new Cliente("Juan", 400);
console.log(juan.mostrarInformacion());
console.log(juan);
// Se manda a llamar directo sin pasar por la instancia
console.log(Cliente.bienvenida());

class Cliente2 {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
}
const juan2 = new Cliente("Juan", 400);
console.log(juan2.mostrarInformacion());
console.log(juan2);
