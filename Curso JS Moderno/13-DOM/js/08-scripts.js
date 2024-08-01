const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild); // Puedes seleccionar el primer elemento
console.log(navegacion.lastElementChild); // Puedes seleccionar el ultimo elemento

// console.log(navegacion.childNodes); // los elementos son los espacios en blanco
// console.log(navegacion.children); // Los espacios en blanco son considerados elementos

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");
// card.children[1].children[1].textContent =
//   "Nuevo Heading desde traversing the don"; // con children vas a ir recorriendo los hijos
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[0]);

// Traversing the DOM

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement); // con parentElement vas a ir recorriendo los padres

// console.log(card);
// console.log(card.nextElementSibling); // se dirige al siguiente elemento
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling); // se dirige al anterior elemento