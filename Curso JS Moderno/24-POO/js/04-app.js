class Cliente {
  #nombre;
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
}

const juan = new Cliente();
// Puedes ver un metodo privado llamando a la class
juan.setNombre("Juan");
console.log(juan.getNombre());
