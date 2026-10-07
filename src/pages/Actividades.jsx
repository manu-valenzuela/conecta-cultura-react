import Cartelera from "./Cartelera"; 
import { Col, Container, Row } from "react-bootstrap"; 
import TarjetaActividad from "../components/TarjetaActividad"; 
import { actividades } from "../data/actividades"; 
 
function Actividades() { 
  function inscribir(actividad) { 
    console.log("Actividad seleccionada:", actividad.nombre); 
  } 
 
  //Como ahora los métodos van a ser ocupados como el contenido de una página completa, están
  //contenidos dentro de un main().
  return ( 
    <Container className="py-4"> 
      <Row className="g-4"> 
      {actividades.map((actividad) => ( 
      <Col xs={12} md={6} lg={4} key={actividad.id}> 
      <TarjetaActividad 
      actividad={actividad} 
      onInscribir={inscribir} 
      /> 
      </Col> 
      ))} 
      </Row> 
    </Container> 
  ); 
} 
 
export default Actividades; 