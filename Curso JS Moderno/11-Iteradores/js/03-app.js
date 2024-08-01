// Fizz Buzz

// Escribe un programa que imprima por consola (con un print) los
// números del 1 al 100 (ambos incluidos y con un salto de línea entre
// cada impresión), sustituyendo los siguientes:
// - Múltiplos de 3 por la palabra "fizz".
// - Múltiplos de 5 por la palabra "buzz".
// - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} Fizz Buzz`);

  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
    
  }
}
