import TarjetaActividad from "../components/TarjetaActividad";
import Inscripcion from "../components/Inscripcion";

//Aquí, nótese que el prop está en plural. Es decir, es un arreglo.
function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <div className="row g-4">
      <h2>Mis Inscripciones</h2>
      {inscripciones.map((item) => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
          <Inscripcion
            inscripcion={item}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </div>
    //map transforma el arreglo en otra cosa, y lo hace mediante la función que está dentro de su propio prop.
  );
}

export default MisInscripciones;
