class LocalStorage {
  static agregarTarea(array) {
    localStorage.setItem("Tareas", JSON.stringify(array));
  }
  static agregarModo(modo) {
    localStorage.setItem("Modo", JSON.stringify(modo));
  }

  static obtenerTarea() {
    const tareas = localStorage.getItem("Tareas")
      ? JSON.parse(localStorage.getItem("Tareas"))
      : [];
    return tareas;
  }
  static obtenerModo() {
    const modo = localStorage.getItem("Modo")
      ? JSON.parse(localStorage.getItem("Modo"))
      : "claro";
    return modo;
  }
}

export default LocalStorage;
