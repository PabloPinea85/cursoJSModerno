// returna solo un documento
const card = document.querySelector(".card");

console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector(".premium .info");
console.log(info);

// Seleccionamos el segundo card de hospedaje
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(segundoCard);

// seleccionar el formulario

const formulario = document.querySelector(".contenido-hero #formulario");
console.log(formulario);

// Selecionar elementos html

const navegacion = document.querySelector("nav");
console.log(navegacion);

