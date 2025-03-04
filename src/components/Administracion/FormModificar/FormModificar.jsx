import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../FormAgregar/FormAgregar.css'

function FormModificar({onEditMovie, idEdit}) {

  const [showModal, setShowModal] = useState(false); //para que se muestre el modal 

      // Esquema de validación con Yup
      const validationSchema = Yup.object({    
          name: Yup.string().required("El nombre es obligatorio"),
          description: Yup.string().required("La descripción es obligatoria"),
          imgMovie: Yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
      });
  
      // Función para manejar el envío del formulario
      const handleSubmit = (values, { resetForm }) => {
          console.log("Datos enviados:", values);
          onEditMovie(idEdit, values.name, values.description, values.imgMovie);
          setShowModal(false); // Cierra el modal después de enviar
          resetForm(); // Limpia el formulario
          console.log("cerro el handleSunmin de editar");
      };
  
  return (
    
      <div className="container mt-3">
        {/* Botón para abrir el modal */}
            <button className="btnEdit" onClick={() => setShowModal(true)}>
            🖊️
            </button>
                  {/* Modal */}
                  {showModal && (
                      <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h5 className="modal-title modalTitle">Editar Película {idEdit}</h5>
                                      <button className="btn-close" onClick={() => setShowModal(false)}></button>
                                  </div>
                                  <div className="modal-body">
                                      {/* Formulario con Formik */}
                                      <Formik
                                          initialValues={{
                                              name: "",
                                              description: "",
                                              imgMovie: "",    
                                          }}
                                          validationSchema={validationSchema}
                                          onSubmit={handleSubmit}
                                      >
                                          {({ errors, touched }) => (
                                              <Form className="d-flex flex-column">
                                                  
                                                  <div>
                                                      <label htmlFor="name">Nombre</label>
                                                      <Field type="text" id="name" name="name" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
                                                      <ErrorMessage component="div" name="name" className="invalid-feedback" />
                                                  </div>
      
                                                  <div>
                                                      <label htmlFor="description">Descripción</label>
                                                      <Field as="textarea" id="description" name="description" className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`} />
                                                      <ErrorMessage component="div" name="description" className="invalid-feedback" />
                                                  </div>
      
                                                  <div>
                                                      <label htmlFor="imgMovie">URL Imagen</label>
                                                      <Field type="text" id="imgMovie" name="imgMovie" className={`form-control ${errors.imgMovie && touched.imgMovie ? 'is-invalid' : ''}`} />
                                                      <ErrorMessage component="div" name="imgMovie" className="invalid-feedback" />
                                                  </div>
      
                                                  <button type="submit" className="btn btnAgregarMovie mt-3">
                                                      Editar Película
                                                  </button>
                                              </Form>
                                          )}
                                      </Formik>
                                  </div>
                                  <div className="modal-footer">
                                      <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                          Cerrar
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>

        
  )
}

export default FormModificar