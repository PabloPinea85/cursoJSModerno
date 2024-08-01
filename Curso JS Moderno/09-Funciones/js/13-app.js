const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id: ${id}`),
  pausar: () => console.log("Pausando..."),
  borrar: (id) => console.log(`Borrando cancion con el id: ${id}`),
  crearUnaPlaylist: (nombre) => console.log(`Creando la playlist: ${nombre}`),
  reproducirUnaPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist... ${nombre}`),
  // Es una forma de agragar valores
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  // Es una forma de obtener valores
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Never gonna give you up";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearUnaPlaylist("Mi Playlist");
reproductor.crearUnaPlaylist("Heavy Metal");
reproductor.reproducirUnaPlaylist("Mi Playlist");
