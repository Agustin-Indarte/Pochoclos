import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormAgregar.css'

const FormAgregar = ({ onAddMovie }) => {
    const [showModal, setShowModal] = useState(false);

    // Esquema de validación con Yup
    const validationSchema = Yup.object({
        id: Yup.string().required("El ID es obligatorio"),
        name: Yup.string().required("El nombre es obligatorio"),
        description: Yup.string().required("La descripción es obligatoria"),
        category: Yup.string().notOneOf(["seleccionar"], "Debes seleccionar una categoría").required("Debes seleccionar una categoría"),
        imgMovie: Yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
    });

    // Función para manejar el envío del formulario
    const handleSubmit = (values, { resetForm }) => {
        console.log("Datos enviados:", values);
        onAddMovie(values);
        setShowModal(false); // Cierra el modal después de enviar
        resetForm(); // Limpia el formulario
    };

    return (
        <div className="container"> 
            {/* Botón para abrir el modal */}
            <button className=" btnNewMovie" onClick={() => setShowModal(true)}>
                Agregar Película
            </button>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modalTitle">Agregar Película</h5>
                                <button className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body text-start">
                                {/* Formulario con Formik */}
                                <Formik
                                    initialValues={{
                                        id: "",
                                        name: "",
                                        description: "",
                                        category: "",
                                        imgMovie: "",
                                        published: false,
                                        favorite: false,
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="d-flex flex-column">
                                            <div>
                                                <label htmlFor="id">Codigo</label>
                                                <Field type="text" id="id" name="id" className={`form-control ${errors.id && touched.id ? 'is-invalid' : ''}`} />
                                                <ErrorMessage component="div" name="id" className="invalid-feedback" />
                                            </div>

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

                                            <div>
                                                <label htmlFor="published">Publicar</label>
                                                <Field type="checkbox" id="published" name="published" className="form-check-input checkpubliched" />
                                            </div>

                                            <button type="submit" className="btn btnAgregarMovie mt-3">
                                                Agregar Película
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
    );
};

export default FormAgregar;