class Tarea {
  constructor(id, tarea, estado) {
    this.id = id;
    this.tarea = tarea;
    this.estado = estado;
  }

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

  static agregarTareaHTML(array, element) {
    element.innerHTML = "";
    array.forEach((tarea) => {
      const html = ` <div class="contendorCards__lista__card" IdTarea='${tarea.id}'>
        <div class="contenedorForm__circle">
          <img src="assets/img/icon-check.svg" alt="" srcset="" />
        </div>
        <p class="contendorCards__lista__card__parrafo">
          ${tarea.tarea}
        </p>
        <img
          class="contendorCards__lista__card__img"
          src="assets/img/icon-cross.svg"
          alt=""

        />
      </div>`;

      element.insertAdjacentHTML("beforeend", html);
    });
  }

  static quitarTareaHTLM(array, element) {
    let id = element.parentElement.getAttribute("IdTarea");
    array.forEach((tareas, index) => {
      if (tareas.id == id) {
        array.splice(index, 1);
        element.parentElement.remove();
      }
    });

    return array;
  }

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

  static countTarea(array, element) {
    let totalElementos = array.length;
    element.textContent = totalElementos;
    return totalElementos;
  }

  static vaciarTexto(element) {
    element.value = "";
  }
}

export default Tarea;
