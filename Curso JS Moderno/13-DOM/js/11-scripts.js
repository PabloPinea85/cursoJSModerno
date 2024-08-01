const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");
    this.textContent = "Idioma y Moenda";
  } else {
    footer.classList.add("activo");
    btnFlotante.classList.add("activo");
    this.textContent = "Ocultar";
  }

  console.log(footer.classList);
}
