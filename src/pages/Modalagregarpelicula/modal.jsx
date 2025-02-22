import React, { useState } from 'react';  
import Button from 'react-bootstrap/Button';  
import Modal from 'react-bootstrap/Modal';  
import Col from 'react-bootstrap/Col';  
import Row from 'react-bootstrap/Row';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './ventanamodal.css';  
import Form from 'react-bootstrap/Form';  


const ModalPage = () => {  
  const [show, setShow] = useState(false);  

  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);  

  return (  
    <>  
      <Button variant="primary" onClick={handleShow}>  
        Agregar Película  
      </Button>  

      <Modal show={show} onHide={handleClose} size="lg" centered>  
        <Modal.Header closeButton>  
          <Modal.Title className='modaltite w-100 text-center' ><h1>Añadir Nueva Película</h1></Modal.Title>  
        </Modal.Header>  
        <Modal.Body>  
          <form>  
            <Row>   
              <Col md={6}>  
                <label htmlFor="codigo">Codigo:</label>  
                <input type="text" id="codigo" name="codigo" className="form-control" />  
              </Col>  
              <Col md={6} className="d-flex align-items-center justify-content-start"> 
                <input   
                  type="checkbox"   
                  id="publicado"   
                  name="publicado"   
                  className="mr-2"   
                  style={{ transform: 'scale(2.5)' }}
                />  
                <label htmlFor="publicado" className="mb-0 checkbox-label-separado"><h3>Publicado</h3></label>  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="nombre">Nombre:</label>  
                <input type="text" id="nombre" name="nombre" className="form-control" />  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="descripcion">Descripción:</label>  
                <textarea id="descripcion" name="descripcion" className="form-control" />  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="categoria">Categorías:</label>  
                <div className="input-group">  
                  <select id="categoria" name="categoria" className="form-control">  
                    <option value="accion">Acción</option>  
                    <option value="comedia">Comedia</option>  
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="anime">Anime</option>
                    <option value="documentales">Documentales</option>  
                  </select>  
                </div>  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <button type="submit" className="btn btn-dark w-100" >Agregar</button>  
              </Col>  
            </Row>  
          </form>  
        </Modal.Body>  
      </Modal>  
    </>  
  );  
};  

export default ModalPage;