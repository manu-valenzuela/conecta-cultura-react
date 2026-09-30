import { Route, Routes } from "react-router-dom"; 
import Inicio from "./pages/Inicio"; 
import Actividades from "./pages/Actividades"; 
import DetalleActividad from "./pages/DetalleActividad"; 
import AdminActividades from "./pages/admin/AdminActividades"; 
import NoEncontrada from "./pages/NoEncontrada";
import Navegacion from "./components/Navegacion";
 
function App() {
  //El retorno hay que devolverlo dentro de un conjunto vacío, de modo de asegurar que el retorno sea
  //siempre un solo elemento.
  return (
    <>
    <Navegacion />
    <Routes> 
      <Route path="/" element={<Inicio />} /> 
      <Route path="/actividades" element={<Actividades />} /> 
      <Route path="/actividades/:id" element={<DetalleActividad />} /> 
      <Route path="/admin/actividades" element={<AdminActividades />} /> 
      <Route path="*" element={<NoEncontrada />} /> 
    </Routes>
    </>
  ); 
} 
 
export default App; 

/*
Deprecado en Guía 11 or el código de arriba

import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Cartelera from "./pages/Cartelera";
import MisInscripciones from "./pages/MisInscripciones";
import { actividades } from "./data/actividades";


function App() {
  /*useState: Primero entran los parámetros. categoría y setCategoria son un Getter y un Setter. 
  El estado inicial de useState es el que está entre paréntesis. 
  const [categoria, setCategoria] = useState("Todas");
  /*visibles: Es un arreglo donde se define qué mostrará useState.
    ? es un operador ternario. Hace una pregunta y asigna un valor true o false inmediatamente.
    Aquí, la pregunta es si la categoría actual es "Todas".

    : es lo que debe ocurrir si la pregunta del operador ternario retorna un FALSE.
  
  const visibles = categoria === "Todas"
    ? actividades
    : actividades.filter((actividad) => actividad.categoria === categoria);

//Uso de useState y useEffect, ambos con funciones anónimas y useState con operador ternario.
const [inscripciones, setInscripciones] = useState(() => {
  const guardadas = localStorage.getItem("inscripciones");
  return guardadas ? JSON.parse(guardadas) : [];
});

useEffect(() => {
  localStorage.setItem(
    "inscripciones",
    JSON.stringify(inscripciones)
  );
}, [inscripciones]);

//.some(): comprueba si algún elemento cumple con la condición, y retorna TRUE o FALSE.
function inscribir(actividad) {
  const yaExiste = inscripciones.some((item) => item.id === actividad.id);

  if (yaExiste) return;
//... agrega entradas en un arreglo
  setInscripciones([...inscripciones, actividad]);
}

//Para eliminar inscripciones, usa el booleano devuelto por filter donde discrimina si el objeto
//coincide o no con el id del elemento que que quiere eliminar.
function eliminarInscripcion(id) {
  setInscripciones(
    inscripciones.filter((item) => item.id !== id)
  );
}
 
  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <select
          className="form-select mb-4"
          value={categoria}
          //Aquí se activa el setState al ocurrir un cambio de evento. Al activarse, o dispararse, la ejecución vuelve a visibles.

          //Al agregar actividades, fue necesario agregar los nombres de las categorías nuevas a esta lista manualmente.
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option>Todas</option>
          <option>Música</option>
          <option>Artes visuales</option>
          <option>Danza</option>
          <option>Teatro</option>
        </select>
        <Cartelera
          actividades={visibles}
          onInscribir={inscribir}
        />
        <hr></hr>
        <MisInscripciones
          inscripciones={inscripciones}
          onEliminar={eliminarInscripcion}
        />
      </main>
    </>
  );
}

export default App;
*/
