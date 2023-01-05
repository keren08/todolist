import LocalStorage from "./localStorage.js";
class Tarea {
  constructor(id, tarea, estado) {
    this.id = id;
    this.tarea = tarea;
    this.estado = estado;
  }

  // agregar o quita mensajes de error si el input esta vacio
  static validarTarea(tarea, element) {
    let vacio = tarea == "" ? true : false;
    let tag = element.parentElement.parentElement.nextElementSibling.tagName;
    if (tag == "P") {
      element.parentElement.parentElement.classList.remove("vacio");
      element.parentElement.parentElement.nextElementSibling.remove();
    }
    if (vacio) {
      element.parentElement.parentElement.classList.add("vacio");
      element.parentElement.parentElement.insertAdjacentHTML(
        "afterend",
        '<p class="mensaje__error">Tiene que agregar una tarea<p>'
      );
    }
    return vacio;
  }

  //genera la lista de tareas en html
  static agregarTareaHTML(array, element, guardar) {
    element.innerHTML = "";
    array.forEach((tarea) => {
      let hidden = tarea.estado ? "" : "hidden";
      let realizada = tarea.estado ? "realizada" : "";
      let tachar = tarea.estado ? "tachar" : "";

      const html = ` <div class="contendorCards__lista__card" IdTarea='${tarea.id}' Estado='${tarea.estado}'>
        <div class="contenedorForm__circle ${realizada}">
          <img src="assets/img/icon-check.svg" alt="" srcset=""class='check' ${hidden}/>
        </div>
        <p class="contendorCards__lista__card__parrafo ${tachar}">
          ${tarea.tarea}
        </p>
        <img
          class="contendorCards__lista__card__img"
          src="assets/img/icon-cross.svg"
          alt=""
          class="hidden"
        />
      </div>`;

      element.insertAdjacentHTML("beforeend", html);
    });
    if (guardar) {
      LocalStorage.agregarTarea(array);
    }
  }
  //quita tarea del array
  static quitarTareaHTLM(array, element) {
    let id = element.parentElement.getAttribute("IdTarea");
    array.forEach((tareas, index) => {
      if (tareas.id == id) {
        array.splice(index, 1);
        element.parentElement.remove();
      }
    });
    LocalStorage.agregarTarea(array);
    return array;
  }
  //busca cual es el ultimo id creado, y le suma un para crear el id de la nueva tarea
  static idTarea(array) {
    let ids = [];
    let nextId = 0;
    array.forEach((tarea) => {
      ids.push(tarea.id);
    });
    let id = Math.max.apply(null, ids);
    nextId = (id == "-Infinity" ? 0 : id) + 1;
    return nextId;
  }

  //actualiza el contador de tareas
  static countTarea(array, element) {
    let totalElementos = array.length;
    element.textContent = totalElementos;
    return totalElementos;
  }

  static vaciarTexto(element) {
    element.value = "";
  }

  //cambia el estado de una tarea
  static tareaRealizada(array, element) {
    let id = element.parentElement.getAttribute("IdTarea");
    array.forEach((tareas) => {
      if (tareas.id == parseInt(id) && tareas.estado == false) {
        tareas.estado = true;
      } else if (tareas.id == parseInt(id) && tareas.estado == true) {
        tareas.estado = false;
      }
    });

    return array;
  }
}

export default Tarea;
