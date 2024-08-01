const cliente = {
  nombre: "Juan",
  saldo: 500,
};

console.log(cliente);


// constructor del objeto
// Te permite crear objetos de forma dinámica y reutilizable
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("Juan", 500);

console.log(juan);
