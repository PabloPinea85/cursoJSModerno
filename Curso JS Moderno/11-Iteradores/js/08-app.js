const pendientes = ["Tarea", "Comer", "Probar"];

// for in itera sobre las propiedades de un objeto
for (let pendiente in pendientes) {
  console.log(pendiente);
}

const automovil = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
};

for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`${llave} : ${valor}`);
}
