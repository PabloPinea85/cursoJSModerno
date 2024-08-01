let i = 1; // Inicializar el wuile

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} = Bizz Buzz.!!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} = Bizz.`);
  } else if (i % 5 === 0) {
    console.log(`${i} = Buzz.`);
  }

  i++; // Incremento
}
