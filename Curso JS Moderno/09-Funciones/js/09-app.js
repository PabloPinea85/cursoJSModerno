const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando cancion con el id: ${id}`);
  },
  crearUnaPlaylist: function (nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirUnaPlaylist: function(nombre){
    console.log(`Reproduciendo la playlist... ${nombre}`);
  }
};

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();

reproductor.borrar(40);

reproductor.crearUnaPlaylist("Mi Playlist");
reproductor.crearUnaPlaylist("Heavy Metal");
reproductor.reproducirUnaPlaylist("Mi Playlist");