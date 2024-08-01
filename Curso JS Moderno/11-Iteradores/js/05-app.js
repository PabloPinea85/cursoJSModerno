let i = 1;

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} = Fizz Buzz!!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} = Fizz.`);
  } else if (i % 5 === 0) {
    console.log(`${i} = Buzz.`);
  }

  i++; // Incremento
} while (i <= 20); // condicion
