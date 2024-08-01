const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  infomacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto);

console.log(producto.infomacion);
console.log(producto.infomacion.peso);
console.log(producto.infomacion.fabricacion.pais);