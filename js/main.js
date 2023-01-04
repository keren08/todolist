import Tarea from "./modules/tarea.js";
import Color from "./modules/cambiarColor.js";
import LocalStorage from "./modules/localStorage.js";
import Menu from "./modules/menu.js";

const form = document.getElementById("form");
const divTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const count = document.getElementById("count");
const plus = document.getElementById("plus");
const modo = document.getElementById("modo");
const imgMovil = document.getElementById("img_movil");
const imgDesktop = document.getElementById("img_desktop");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const clear = document.getElementById("clear");

let tarea = "";
let listaTareas = LocalStorage.obtenerTarea();

document.addEventListener("DOMContentLoaded", () => {
  Tarea.agregarTareaHTML(listaTareas, divTareas, true);
  Tarea.countTarea(listaTareas, count);
  if (LocalStorage.obtenerModo() == "claro") {
    cambiarModoClaro();
  } else {
    cambiaModoOscuro();
  }
});

//evita q recarge pagina
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//detecta cuando se preciona enter para llamar la funcion de guardar tarea en el array
mensaje.addEventListener("keypress", (e) => {
  let mensajeText = mensaje.value;
  if (e.key == "Enter") {
    agregarTarea(mensajeText);
    Tarea.vaciarTexto(mensaje);
  }
});

//detecta cuando se preciona el mas para llamar la funcion de guardar tarea en el array
plus.addEventListener("click", (e) => {
  let mensajeText = mensaje.value;
  agregarTarea(mensajeText);
  Tarea.vaciarTexto(mensaje);
});

//detecta si dan click en la x y eliminar la tarea
divTareas.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    listaTareas = Tarea.quitarTareaHTLM(listaTareas, e.target);
    Tarea.countTarea(listaTareas, count);
  }

  if (e.target.tagName == "DIV") {
    listaTareas = Tarea.tareaRealizada(listaTareas, e.target);
    Tarea.agregarTareaHTML(listaTareas, divTareas, true);
  }

  if (e.target.tagName == "IMG" && e.target.className == "check") {
    listaTareas = Tarea.tareaRealizada(listaTareas, e.target.parentElement);
    Tarea.agregarTareaHTML(listaTareas, divTareas, true);
  }
});
//detecta si dan click en el sol o luna  y cambia de modo claro a oscuro y viceversa
modo.addEventListener("click", (e) => {
  if (modo.getAttribute("modo") == "claro") {
    cambiaModoOscuro();
  } else {
    cambiarModoClaro();
  }
});

all.addEventListener("click", (e) => {
  removerClassActive();
  all.classList.add("active");
  Menu.all(divTareas, count, all);
});

active.addEventListener("click", (e) => {
  removerClassActive();
  active.classList.add("active");
  Menu.active(divTareas, count, active);
});

completed.addEventListener("click", (e) => {
  removerClassActive();
  completed.classList.add("active");
  Menu.completed(divTareas, count, completed);
});

clear.addEventListener("click", (e) => {
  Menu.clearCompleted(divTareas, count);
});

//funcion de agregar tarea si no esta vacio el input
function agregarTarea(mensajeText) {
  if (!Tarea.validarTarea(mensajeText, mensaje)) {
    tarea = new Tarea(Tarea.idTarea(listaTareas), mensajeText, false);
    listaTareas.push(tarea);
    Tarea.agregarTareaHTML(listaTareas, divTareas, true);
    Tarea.countTarea(listaTareas, count);
  }
}

function cambiarModoClaro() {
  Color.cambiarClaro();
  modo.setAttribute("modo", "claro");
  imgMovil.setAttribute("src", "assets/img/bg-mobile-light.jpg");
  imgDesktop.setAttribute("src", "assets/img/bg-desktop-light.jpg");
  modo.setAttribute("src", "assets/img/icon-moon.svg");
}

function cambiaModoOscuro() {
  Color.cambiarOscuro();
  modo.setAttribute("modo", "oscuro");
  imgMovil.setAttribute("src", "assets/img/bg-mobile-dark.jpg");
  imgDesktop.setAttribute("src", "assets/img/bg-desktop-dark.jpg");
  modo.setAttribute("src", "assets/img/icon-sun.svg");
}

function removerClassActive() {
  const classActive = document.querySelectorAll(".active");
  classActive.forEach((element) => {
    element.classList.remove("active");
  });
}
