// Prototype

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("Juan", 500);

function formaterCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El Cliente ${nombre} tiene un saldo de ${saldo} `;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `El Cliente ${nombre} tiene un saldo de ${saldo} y la categoria es ${categoria}`;
}

console.log(formaterCliente(juan));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("Código con Juan", 4000, "Cursos en Línea");
console.log(formatearEmpresa(CCJ));
