import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Container, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../Firebase';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Requerido'),
  username: Yup.string().required('Requerido'),
  password: Yup.string().min(8, 'Contraseña muy corta').required('Requerido'),
  creditCard: Yup.string().required('Requerido'),
  securityCode: Yup.string().min(3, 'Código inválido').required('Requerido'),
});

const SignUpForm  = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      
      const templateParams = {
        plan: values.plan,
        email: values.email,
        username: values.username,
        
      };

      const serviceId = 'service_sm1p9wy';
      const templateId = 'template_l6dc3kd';
      const userId = 'uCEXyRA4tN57jmK5r';

      await emailjs.send(serviceId, templateId, templateParams, userId);

    
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      Swal.fire({
        icon: 'success',
        title: '¡Suscripción exitosa!',
        text: 'Te has suscrito correctamente. Revisa tu correo electrónico.',
      });

      resetForm(); 
      navigate('/login'); 

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
    <Container className="rounded" style={{ backgroundColor: '#CFCFCF', width: '100%', maxWidth: '350px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#D90429', fontWeight: 'bold', marginTop:"15px" }}>¡Elige tu plan pochoclero!</h1>
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
                <label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', marginRight: '1rem' }}>
                  <Field type="radio" name="plan" value="mensual" style={{ accentColor: '#AC011F', transform: 'scale(1.5)', marginRight: '0.5rem' }} />
                  Mensual
                </label>
                <label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
                  <Field type="radio" name="plan" value="anual" style={{ accentColor: '#AC011F', transform: 'scale(1.5)', marginRight: '0.5rem' }} />
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
              <Col xs={12} sm={6}>
                <Field name="creditCard" placeholder="Tarjeta de Crédito" className={`form-control ${touched.creditCard && errors.creditCard ? 'is-invalid' : ''}`} />
                {touched.creditCard && errors.creditCard ? <div className="invalid-feedback">{errors.creditCard}</div> : null}
              </Col>
              <Col xs={12} sm={6}>
                <Field name="securityCode" placeholder="Código de Seguridad" className={`form-control ${touched.securityCode && errors.securityCode ? 'is-invalid' : ''}`} />
                {touched.securityCode && errors.securityCode ? <div className="invalid-feedback">{errors.securityCode}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12} className="text-center">
                <Button type="submit" variant="danger" className="w-100" onClick={handleSubmit} style={{ border: '4px solid white' }}>Suscribirse</Button>
                <Button variant="danger" className="w-100 mt-2" onClick={handleGoogleLogin} style={{ border: '4px solid white' }}>Suscribirse con Google</Button>
                <p style={{ marginTop: '1rem', color: '#D90429' }}>
                  Si ya te encuentras suscripto, <Link to="/login" style={{ color: '#AC011F' }}>Inicia Sesión</Link>
                </p>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );};

export default SignUpForm;



