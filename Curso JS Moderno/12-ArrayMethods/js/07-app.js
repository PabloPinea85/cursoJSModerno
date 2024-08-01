const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const meses2 = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre"];

// .concat
const resultado = meses.concat(meses2, "otro mes");
console.log(resultado);

// spread operator

const resultado2 = [...meses, ...meses2, "otro mes"];

console.log(resultado2);
