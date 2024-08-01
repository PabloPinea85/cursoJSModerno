const nombre = localStorage.getItem("nombre");
console.log(nombre);

// De esta forma podemos recuperar el objeto de forma segura
// lo convierto a JSON y lo parseo
const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON));

// Si queremos recuperar un arreglo de objetos
// lo convierto a JSON y lo parseo
const meses = localStorage.getItem("meses");
const mesesArray = JSON.parse(meses);

console.log(mesesArray);
