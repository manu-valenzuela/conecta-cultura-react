function Inscripcion({ inscripcion, onEliminar }) {
  return (
    //Los campos se llenan con los índices del arreglo que infresó por parámetro.
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{inscripcion.nombre}</h2>
        <p>{inscripcion.categoria}</p>
        <p>Precio: {inscripcion.precio}</p>
        <button
          className="btn btn-primary"
          //Botón que elimina una inscripción.
          onClick={() => onEliminar(inscripcion.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default Inscripcion;
