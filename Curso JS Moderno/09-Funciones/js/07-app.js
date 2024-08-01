inciarApp();

function inciarApp() {
  console.log("Iniciando App...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere...");
  console.log(`Usuario autenticado exitosamente. ${usuario}`);
}
