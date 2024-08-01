const producto = 'Monitor 20 pulgadas'
// Metodos para remplazar en string
console.log(producto);
// replace() para remplazar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// slice() para cortar(la puedes engañar)
console.log(producto.slice(0, 10));
console.log(producto.slice(10));
console.log(producto.slice(-10));

// Alternativa a slice(no la puedes engañar)
console.log(producto.substring(0, 10));
console.log(producto.substring(2,1));

const usuario = 'pedro';
console.log(usuario.substring(0, 1));
// charAt() para obtener una letra
console.log(usuario.charAt(0));
