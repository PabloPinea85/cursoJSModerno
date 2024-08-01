const producto = 'Monitor 20 pulgadas'

// .repeat() te va permitir repetir una cadena de texto
const texto = ' en promoción'.repeat(2.4)
console.log(texto)

console.log(`${producto} ${texto} !!!`);

// split() divide una cadena de texto en un arreglo
const actividad = 'Estoy aprendiendo JavaScript Moderno'
console.log(actividad.split(' '));

const hobbies = 'Leer , caminar, escuchar musica, aprender a programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JavaScript #JSModerno';
console.log(tweet.split('#'));