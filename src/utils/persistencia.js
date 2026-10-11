//Guarda el arreglo de datos en LocalStorage

export function guardarInscripciones(datos) {
  localStorage.setItem(
    "inscripciones",
    JSON.stringify(datos)
  );
}
