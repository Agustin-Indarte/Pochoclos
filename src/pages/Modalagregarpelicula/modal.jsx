import React, { useState } from 'react';  
import { useFormik } from 'formik';  
import * as Yup from 'yup';  
import Button from 'react-bootstrap/Button';  
import Modal from 'react-bootstrap/Modal';  
import Col from 'react-bootstrap/Col';  
import Row from 'react-bootstrap/Row';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import './ventanamodal.css';  
import Form from 'react-bootstrap/Form';  

import { addMoviesToLocalStorage } from '../../components/helpers/addMoviesToLocalStorage'; // Asegúrate de que la ruta sea correcta  

const ModalPage = () => {  
  const [show, setShow] = useState(false);  

  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);  

  // Configuración de Formik con Yup  
  const formik = useFormik({  
    initialValues: {  
      code: '',  
      name: '',  
      description: '',  
      category: 'action',  
      published: false,  
      imgMovies: '', // Cambiado de 'url' a 'imgMovies'  
    },  
    validationSchema: Yup.object({  
      code: Yup.string().required('El código es obligatorio'),  
      name: Yup.string().required('El nombre es obligatorio'),  
      description: Yup.string().required('La descripción es obligatoria'),  
      imgMovies: Yup.string().url('Ingrese una URL válida').required('La URL de la imagen es obligatoria'), // Validación para imgMovies  
    }),  
    onSubmit: (values) => {  
      addMoviesToLocalStorage(values); // Agrega la película al localStorage  
      console.log('Datos de la película:', values);  
      handleClose();  
      formik.resetForm(); // Resetea el formulario después del envío  
    },  
  });  

  return (  
    <>  
      <Button variant="primary" onClick={handleShow}>  
        Agregar Película  
      </Button>  

      <Modal show={show} onHide={handleClose} size="md" centered>  
        <Modal.Header closeButton>  
          <Modal.Title className='modaltite w-100 text-center'><h1>Añadir Nueva Película</h1></Modal.Title>  
        </Modal.Header>  
        <Modal.Body>  
          <form onSubmit={formik.handleSubmit}>  
            <Row>   
              <Col md={6}>  
                <label htmlFor="code">Código:</label>  
                <input  
                  type="text"  
                  id="code"  
                  name="code"  
                  className="form-control"  
                  value={formik.values.code}  
                  onChange={formik.handleChange}  
                  onBlur={formik.handleBlur}  
                />  
                {formik.touched.code && formik.errors.code ? (  
                  <div className="text-danger">{formik.errors.code}</div>  
                ) : null}  
              </Col>  
              <Col md={6} className="d-flex align-items-center justify-content-start">   
                <input   
                  type="checkbox"   
                  id="published"   
                  name="published"   
                  className="mr-2"   
                  checked={formik.values.published}  
                  onChange={formik.handleChange}  
                  style={{ transform: 'scale(2.5)' }}  
                />  
                <label htmlFor="published" className="mb-0 checkbox-label-separado"><h3>Publicado</h3></label>  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="name">Nombre:</label>  
                <input  
                  type="text"  
                  id="name"  
                  name="name"  
                  className="form-control"  
                  value={formik.values.name}  
                  onChange={formik.handleChange}  
                  onBlur={formik.handleBlur}  
                />  
                {formik.touched.name && formik.errors.name ? (  
                  <div className="text-danger">{formik.errors.name}</div>  
                ) : null}  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="description">Descripción:</label>  
                <textarea  
                  id="description"  
                  name="description"  
                  className="form-control"  
                  value={formik.values.description}  
                  onChange={formik.handleChange}  
                  onBlur={formik.handleBlur}  
                />  
                {formik.touched.description && formik.errors.description ? (  
                  <div className="text-danger">{formik.errors.description}</div>  
                ) : null}  
              </Col>  
            </Row>  

            {/* Nuevo campo para imgMovies */}  
            <Row className="mt-3">  
              <Col>  
                <label htmlFor="imgMovies">URL de Imagen:</label>  
                <input  
                  type="text"  
                  id="imgMovies"  
                  name="imgMovies"  
                  className="form-control"  
                  value={formik.values.imgMovies}  
                  onChange={formik.handleChange}  
                  onBlur={formik.handleBlur}  
                />  
                {formik.touched.imgMovies && formik.errors.imgMovies ? (  
                  <div className="text-danger">{formik.errors.imgMovies}</div>  
                ) : null}  
              </Col>  
            </Row>  

            <Row className="mt-3">  
              <Col>  
                <label htmlFor="category">Categorías:</label>  
                <div className="input-group">  
                  <select  
                    id="category"  
                    name="category"  
                    className="form-control"  
                    value={formik.values.category}  
                    onChange={formik.handleChange}  
                  >  
                    <option value="action">Acción</option>  
                    <option value="comedy">Comedia</option>  
                    <option value="drama">Drama</option>  
                    <option value="horror">Terror</option>  
                    <option value="anime">Anime</option>  
                    <option value="documentaries">Documentales</option>  
                  </select>  
                </div>  
              </Col>  
            </Row>  
            <Row className="mt-3">  
              <Col>  
                <button type="submit" className="btn btn-dark w-100">Agregar</button>  
              </Col>  
            </Row>  
          </form>  
        </Modal.Body>  
      </Modal>  
    </>  
  );  
};  

export default ModalPage;  