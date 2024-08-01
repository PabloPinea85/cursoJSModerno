const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("Diste click en el titulo");
  } else if (e.target.classList.contains("precio")) {
    console.log("Diste click en el precio");
  } else if (e.target.classList.contains("card")) {
    console.log("Diste click en la card");
  }
});
