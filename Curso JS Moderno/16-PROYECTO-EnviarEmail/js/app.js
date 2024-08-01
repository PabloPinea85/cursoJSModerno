document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    cc: "",
    asunto: "",
    mensaje: "",
  };
  console.log(email);

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");

  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector(`#formulario button[type="submit"]`);
  const btnReset = document.querySelector(`#formulario button[type="reset"]`);
  const spinner = document.querySelector("#spinner");

  // Asignar eventos
  // blur se ejecuta cuando vamos de un campo a otro
  inputEmail.addEventListener("input", validar); // fn sin los parentesis espera que se haga el evento para comenzar

  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();

    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      resetFormulario();
      // Crear una alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";
      formulario.appendChild(alertaExito);
      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    // Trim() elmina espacios en blanco
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta(`El email no es valido`, e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    limpiarAlerta(e.target.parentElement);

    // Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    //Comprobar el objerto en email
    comprobarEmail();
  }
  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe esa alertas
    limpiarAlerta(referencia);

    // Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Inyectar el error al formulario
    referencia.appendChild(error);
  }
  function limpiarAlerta(referencia) {
    // Comprueba si ya existe esa alertas
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
  function comprobarEmail() {
    const camposObligatorios = Object.keys(email).filter((key) => key !== "cc");
    const camposVacios = camposObligatorios.filter((key) => email[key] === "");

    if (
      camposVacios.length === 0 ||
      (camposVacios.length === 1 && camposVacios[0] === "cc")
    ) {
      btnSubmit.classList.remove("opacity-50");
      btnSubmit.disabled = false;
    } else {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
    }
  }

  function resetFormulario() {
    // reiniciar el objeto
    email.email = "";
    email.cc = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }

  function agregarCampoCC() {
    const ccContainer = document.createElement("DIV");
    ccContainer.classList.add("flex", "flex-col", "space-y-2");

    const ccLabel = document.createElement("label");
    ccLabel.htmlFor = "cc";
    ccLabel.textContent = "CC: ";
    ccLabel.classList.add("front-regular", "font-medium");

    const ccInput = document.createElement("input");
    ccInput.type = "text";
    ccInput.id = "cc";
    ccInput.name = "cc";
    ccInput.placeholder = "Email CC, ej: HrI9M@example.com";
    ccInput.classList.add(
      "border",
      "border-gray-300",
      "px-3",
      "py-2",
      "rounded-lg"
    );

    ccInput.addEventListener("input", validarCC); // Nueva fn para validar el campo CC

    ccContainer.appendChild(ccLabel);
    ccContainer.appendChild(ccInput);

    inputEmail.insertAdjacentElement("afterend", ccContainer);
    // antes de inputAsunto
  }
  function validarCC(e) {
    const ccValue = e.target.value.trim();
    // Di el campo CC tiene informacion, validarlo como correo
    if (ccValue !== "" && !validarEmail(ccValue)) {
      mostrarAlerta(
        `El email en el campo CC no es válido`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
    } else {
      // Si el campo está vacio o no es correo valido, limpiar la alerta y actualizar el objeto
      limpiarAlerta(e.target.parentElement);
      email[e.target.name] = ccValue.toLowerCase();
      comprobarEmail();
    }
  }

  agregarCampoCC(); // Se ejecuta la fn
});
