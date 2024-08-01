const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const salirBtn = document.querySelector("#salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
salirBtn.addEventListener("click", cerrrarPantallaCompleta);

function pantallaCompleta() {
  document.documentElement.requestFullscreen();
}

function cerrrarPantallaCompleta() {
  document.exitFullscreen();
}
