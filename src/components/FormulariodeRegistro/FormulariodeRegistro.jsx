import React from 'react';
import {Formik, Field, Form} from 'formik'
import { Button, Container, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Requerido'),
  username: Yup.string().required('Requerido'),
  password: Yup.string().min(6, 'Contraseña muy corta').required('Requerido'),
  creditCard: Yup.string().required('Requerido'),
  securityCode: Yup.string().min(3, 'Código inválido').required('Requerido'),
});

const SignUpForm  = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // 1. Enviar correo usando EmailJS
      const templateParams = {
        plan: values.plan,
        email: values.email,
        username: values.username,
        // ... otros valores que quieras incluir en el correo
      };

      // Reemplazar con tus valores reales de EmailJS
      const serviceId = 'service_sm1p9wy';
      const templateId = 'template_l6dc3kd';
      const userId = 'uCEXyRA4tN57jmK5r';

      await emailjs.send(serviceId, templateId, templateParams, userId);

      // 2. (Opcional) Crear usuario en Firebase (si es necesario)
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      Swal.fire({
        icon: 'success',
        title: '¡Suscripción exitosa!',
        text: 'Te has suscrito correctamente. Revisa tu correo electrónico.',
      });

      resetForm(); // Limpiar el formulario después del envío exitoso
      navigate('/login'); // Redirigir a la página de perfil

    } catch (error) {
      console.error("Error al suscribirse:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al suscribirte. Inténtalo nuevamente.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/login');
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al iniciar sesión con Google. Inténtalo nuevamente.',
      });
    }

}
  
    
  return (
    <Container style={{ backgroundColor: '#CFCFCF', padding: '1rem', borderRadius: '10px', maxWidth: '350px', margin: '0 auto', marginTop: '-20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#D90429', fontWeight: 'bold' }}>¡Elige tu plan pochoclero!</h1>
      <Formik
        initialValues={{
          plan: '',
          email: '',
          username: '',
          password: '',
          creditCard: '',
          securityCode: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Row className="justify-content-center mb-3">
              <Col md={12} className="text-center">
                <label style={{ fontWeight: 'bold', color: 'black' }}>
                  <Field type="radio" name="plan" value="mensual" />
                  Mensual
                </label>
                <label style={{ marginLeft: '1rem', fontWeight: 'bold', color: 'black' }}>
                  <Field type="radio" name="plan" value="anual" />
                  Anual
                </label>
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="email" type="email" placeholder="Email" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} />
                {touched.email && errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="username" placeholder="Usuario" className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`} />
                {touched.username && errors.username ? <div className="invalid-feedback">{errors.username}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="password" type="password" placeholder="Contraseña" className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} />
                {touched.password && errors.password ? <div className="invalid-feedback">{errors.password}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={6}>
                <Field name="creditCard" placeholder="Tarjeta de Crédito" className={`form-control ${touched.creditCard && errors.creditCard ? 'is-invalid' : ''}`} />
                {touched.creditCard && errors.creditCard ? <div className="invalid-feedback">{errors.creditCard}</div> : null}
              </Col>
              <Col md={6}>
                <Field name="securityCode" placeholder="Código de Seguridad" className={`form-control ${touched.securityCode && errors.securityCode ? 'is-invalid' : ''}`} />
                {touched.securityCode && errors.securityCode ? <div className="invalid-feedback">{errors.securityCode}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12} className="text-center">
                <Button type="submit" variant="danger" className="w-100" onClick={handleSubmit}>Suscribirse</Button>
                <Button variant="danger" className="w-100 mt-2" onClick={handleGoogleLogin}>Iniciar sesión con Google</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;

