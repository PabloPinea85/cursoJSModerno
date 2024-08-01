const nav = document.querySelector(".navegacion");

// registrar un evento
nav.addEventListener("mouseout", () => {
  console.log("saliendo de la navegacion");
  nav.style.backgroundColor = "trasparent";
});

nav.addEventListener("dbclick", () => {
  console.log("entrando en la navegacion");
  nav.style.backgroundColor = "white";
});

// mousedown -> presionar
// mouseup -> soltar
// mouseenter -> entrar
// mouseleave -> salir

// mousemove -> mover
// mouseover -> entrar
// mouseout -> salir
// click -> presionar
// dblclick -> doble presionar