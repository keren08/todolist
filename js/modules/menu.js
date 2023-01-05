import LocalStorage from "./localStorage.js";
import Tarea from "./tarea.js";

class Menu {
  static all(divTareas, count) {
    let tareas = LocalStorage.obtenerTarea();
    Tarea.agregarTareaHTML(tareas, divTareas, false);
    Tarea.countTarea(tareas, count);
  }

  static active(divTareas, count) {
    let tareas = LocalStorage.obtenerTarea();
    let activas = [];
    tareas.forEach((tarea) => {
      if (tarea.estado == false) {
        activas.push(tarea);
      }
    });
    Tarea.agregarTareaHTML(activas, divTareas, false);
    Tarea.countTarea(activas, count);
  }

  static completed(divTareas, count) {
    let tareas = LocalStorage.obtenerTarea();
    let completas = [];
    tareas.forEach((tarea) => {
      if (tarea.estado == true) {
        completas.push(tarea);
      }
    });
    Tarea.agregarTareaHTML(completas, divTareas, false);
    Tarea.countTarea(completas, count);
  }

  static clearCompleted(divTareas, count) {
    let tareas = LocalStorage.obtenerTarea();
    tareas.forEach((tarea, index) => {
      if (tarea.estado == true) {
        tareas.splice(index, 1);
      }
    });

    Tarea.agregarTareaHTML(tareas, divTareas, true);
    Tarea.countTarea(tareas, count);
  }
}

export default Menu;
