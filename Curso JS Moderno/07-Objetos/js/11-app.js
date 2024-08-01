// cuando a una funcion le paso un this es implicito al objeto
// sino puede buscar fuera de el objeto
const nombre = "Hola";
const precio = 300;
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio} `
    );
  },
};
// This palabra reservada es implicito al objeto
const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function () {
      console.log(
        `El producto: ${this.nombre} tiene un precio de: ${this.precio} `
      );
    },
  };

producto.mostrarInfo();
producto2.mostrarInfo();
