// LocalStore solo almacena string
localStorage.setItem("nombre", "Juan");

const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
};
// De esta forma se guarda el objeto como string
const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString);

// De esta forma se guarda el array como string
const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses));
