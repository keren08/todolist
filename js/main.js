import Tarea from "./modules/tarea.js";

const form = document.getElementById("form");
const divTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const count = document.getElementById("count");
const plus = document.getElementById("plus");

let tarea = "";
let listaTareas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

mensaje.addEventListener("keypress", (e) => {
  let mensajeText = mensaje.value;
  if (e.key == "Enter") {
    agregarTarea(mensajeText);
    Tarea.vaciarTexto(mensaje);
  }
});

plus.addEventListener("click", (e) => {
  let mensajeText = mensaje.value;
  agregarTarea(mensajeText);
  Tarea.vaciarTexto(mensaje);
});

divTareas.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    listaTareas = Tarea.quitarTareaHTLM(listaTareas, e.target);
    Tarea.countTarea(listaTareas, count);
  }
});

function agregarTarea(mensajeText) {
  if (!Tarea.validarTarea(mensajeText, mensaje)) {
    tarea = new Tarea(Tarea.idTarea(listaTareas), mensajeText, false);
    listaTareas.push(tarea);
    Tarea.agregarTareaHTML(listaTareas, divTareas);
    Tarea.countTarea(listaTareas, count);
  }
}
