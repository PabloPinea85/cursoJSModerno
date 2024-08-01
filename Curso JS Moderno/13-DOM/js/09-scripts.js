// const primerEnlace = document.querySelector("a");
// primerEnlace.remove();
// console.log(primerEnlace);

// Eliminar desde el padre...

const navegation = document.querySelector(".navegacion");
console.log(navegation.children);
navegation.removeChild(navegation.children[2]);
