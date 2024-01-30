
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from '../my-carousel';    
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h2>¿CON GANAS DE SUMAR UN INTEGRANTE A TU FAMILIA?</h2>
      <UncontrolledExample /> 
      <p>En Puppis conectamos humanos con su mascota. Sabemos la importancia de que no haya ningún animal sin familia y por eso apoyamos y ayudamos a rescatistas y fundaciones todoslos días para lograrlo.
        Si estás pensando sumar un amigo peludo tenés que saber el compromiso que esto implica.No sólo será tu compañía sino un integrante más de la familia. Por lo que te recomendamosplanifiques bien su llegada, asegúrate que todos estén de acuerdo y que en tu edificio o casa se permitan mascotas. Tené en cuenta los gastos mensuales relacionados, cuidados generales que necesitará para que se encuentre saludable y cómodo y con quién dejarlo en caso de salir de vacaciones.</p>
        <div>
        <h2> Requisitos para adoptar </h2>
        <ul>
          <li>Ser mayor de 21 años.</li>
          <li>Amar a las mascotas y poder dedicarle el tiempo que necesite.</li>
          <li>Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.</li>
          <li>Estar bien predispuesto: te pedimos cargues tu solicitud, realices una entrevista con el especialistas y respondas a nuestro contacto.</li>
          <li>Comprometerse con el cuidado, la salud y la castración de la mascota.</li>
        </ul>
        <h2> Animate a adoptar</h2>
        <h3> Formulario de adopción 
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>
        </h3>   
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                placeholder="Nombre y apellido"
                autoFocus
              /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                placeholder="Teléfono"
                autoFocus
              /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control  
                placeholder="correo@ejemplo.com"
                autoFocus
              /> 
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contanos por qué deseas adoptar a una mascota</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
     </div>
);
}


export default Home;

