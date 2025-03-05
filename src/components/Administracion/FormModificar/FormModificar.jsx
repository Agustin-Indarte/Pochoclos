import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../FormAgregar/FormAgregar.css'
import '../FormModificar/FormModificar.css'
import { GetMoviesToLocalStorage } from '../helpers/GetMoviesToLocalStorage';

function FormModificar({onEditMovie, idEdit}) {

  const [showModal, setShowModal] = useState(false); //para que se muestre el modal 

        const movies = GetMoviesToLocalStorage();
        var movieEdit = [];

        movies.forEach(movie => {
            if (movie.id === idEdit){ 
                movieEdit.id = movie.id;
                movieEdit.name = movie.name;
                movieEdit.description = movie.description;
                movieEdit.category = movie.category;
                movieEdit.imgMovie = movie.imgMovie;
            }
        });

      // Esquema de validación con Yup
      const validationSchema = Yup.object({    
          name: Yup.string().max(20, "El codigo no puede tener más de 20 dígitos").required("El nombre es obligatorio"),
          description: Yup.string().max(500, "El codigo no puede tener más de 500 dígitos").required("La descripción es obligatoria"),
          imgMovie: Yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
          category: Yup.string().notOneOf(["seleccionar"], "Debes seleccionar una categoría").required("Debes seleccionar una categoría"),
      });
  
      // Función para manejar el envío del formulario
      const handleSubmit = (values, { resetForm }) => {
          console.log("Datos enviados:", values);
          onEditMovie(idEdit, values.name, values.description, values.imgMovie, values.category);
          setShowModal(false); // Cierra el modal después de enviar
          resetForm(); // Limpia el formulario
          console.log("cerro el handleSunmin de editar");
      };

  
  return (
    
      <div className="container">
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
                                      <h5 className="modalTitle">Editar Película</h5>
                                      <button className="btn-close" onClick={() => setShowModal(false)}></button>
                                  </div>
                                  <div className="modal-body">
                                      {/* Formulario con Formik */}
                                      <Formik
                                          initialValues={{
                                              name: movieEdit.name,
                                              description: movieEdit.description,
                                              imgMovie: movieEdit.imgMovie, 
                                              category: movieEdit.category,   
                                          }}
                                          validationSchema={validationSchema}
                                          onSubmit={handleSubmit}
                                      >
                                          {({ errors, touched }) => (
                                              <Form className="d-flex flex-column container text-start">
                                                 <div className='row'>
                                                            <div className='col-lg-4 col-sm-12 text-center'>
                                                                <img className='imgModalEdit' src={movieEdit.imgMovie} alt="" />
                                                            </div>
                                                            <div className='col-lg-8 col-sm-12'>
                                                                <div>
                                                                <label htmlFor="name">Nombre</label>
                                                                <Field type="text" id="name" name="name" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
                                                                <ErrorMessage component="div" name="name" className="invalid-feedback" />
                                                                </div>

                                                                <div>
                                                                    <label htmlFor="category">Categoría</label>
                                                                    <Field as="select" id="category" name="category" className={`form-control ${errors.category && touched.category ? 'is-invalid' : ''}`}>
                                                                        <option value="seleccionar">Seleccionar</option>
                                                                        <option value="Accion">Acción</option>
                                                                        <option value="Animacion">Animación</option>
                                                                        <option value="Ciencia ficcion">Ciencia ficción</option>
                                                                        <option value="Comedia">Comedia</option>
                                                                        <option value="Drama">Drama</option>
                                                                        <option value="Fantasia">Fantasía</option>
                                                                        <option value="Terror">Terror</option>
                                                                    </Field>
                                                                    <ErrorMessage component="div" name="category" className="invalid-feedback" />
                                                                </div>
                                                            </div>
                                                    </div>

                                                    <div className='mt-4'>
                                                      <label htmlFor="imgMovie">URL Imagen</label>
                                                      <Field type="text" id="imgMovie" name="imgMovie" className={`form-control ${errors.imgMovie && touched.imgMovie ? 'is-invalid' : ''}`} />
                                                      <ErrorMessage component="div" name="imgMovie" className="invalid-feedback" />
                                                  </div>

                                                    <div className='mb-2'>
                                                      <label htmlFor="description">Descripción</label>
                                                      <Field as="textarea" id="description" name="description" className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`} />
                                                      <ErrorMessage component="div" name="description" className="invalid-feedback" />
                                                  </div>
      
                                                  <button type="submit" className="btn btnAgregarMovie mt-3">
                                                      Editar Película
                                                  </button>
                                              </Form>
                                          )}
                                      </Formik>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>

        
  )
}

export default FormModificar