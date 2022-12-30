import Tarea from "./modules/tarea.js";
import Color from "./modules/cambiarColor.js";

const form = document.getElementById("form");
const divTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const count = document.getElementById("count");
const plus = document.getElementById("plus");
const modo = document.getElementById("modo");
const imgMovil = document.getElementById("img_movil");
const imgDesktop = document.getElementById("img_desktop");

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

modo.addEventListener("click", (e) => {
  if (modo.getAttribute("modo") == "claro") {
    Color.cambiarOscuro();
    modo.setAttribute("modo", "oscuro");
    imgMovil.setAttribute("src", "assets/img/bg-mobile-dark.jpg");
    imgDesktop.setAttribute("src", "assets/img/bg-desktop-dark.jpg");
    modo.setAttribute("src", "assets/img/icon-sun.svg");
  } else {
    Color.cambiarClaro();
    modo.setAttribute("modo", "claro");
    imgMovil.setAttribute("src", "assets/img/bg-mobile-light.jpg");
    imgDesktop.setAttribute("src", "assets/img/bg-desktop-light.jpg");
    modo.setAttribute("src", "assets/img/icon-moon.svg");
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
