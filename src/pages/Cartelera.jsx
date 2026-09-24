import TarjetaActividad from "../components/TarjetaActividad";

//Aquí, nótese que el prop está en plural. Es decir, es un arreglo.
function Cartelera({ actividades, onInscribir }) {
  return (
    <div className="row g-4">
      {actividades.map((actividad) => (
        <div className="col-12 col-md-6 col-lg-4" key={actividad.id}>
          <TarjetaActividad
            actividad={actividad}
            onInscribir={onInscribir}
          />
        </div>
      ))}
    </div>
    //map transforma el arreglo en otra cosa, y lo hace mediante la función que está dentro de su propio prop.
  );
}

export default Cartelera;
