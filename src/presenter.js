import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoInput = document.querySelector("#genero");
const idiomaInput = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;  
  const edad = Number.parseInt(edadInput.value);
  const genero = generoInput.value;
  const idioma = idiomaInput.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad, idioma) + "</p>";
});