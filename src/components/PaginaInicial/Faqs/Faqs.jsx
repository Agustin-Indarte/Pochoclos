import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faqs.css';

function PreguntasFrecuentes() {
  return (
    <div className="acordion">
      <h2>Preguntas Frecuentes</h2>
      <Accordion className='preguntas-frecuentes' defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué es Pochoclos?</Accordion.Header>
          <Accordion.Body>
            <p>Pochoclos es tu plataforma de streaming para ver películas y series sin interrupciones. Te ofrecemos planes flexibles para que elijas cómo querés disfrutar del contenido, ya sea en tu tele, compu o celular.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuáles son sus planes?</Accordion.Header>
          <Accordion.Body>
            <p>Tenemos planes mensuales y anuales con distintos beneficios. Todos incluyen acceso ilimitado al catálogo, pero el plan anual te da ventajas extra, como estrenos anticipados y más dispositivos conectados.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Dónde lo puedo ver?</Accordion.Header>
          <Accordion.Body>
            <p>Podés verlo en tu Smart TV, computadora, tablet o celular. Solo necesitás una conexión a internet y listo, maratón asegurado.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Puedo cancelar mi suscripción?</Accordion.Header>
          <Accordion.Body>
            <p>Sí, podés dar de baja el servicio cuando quieras desde tu cuenta. Seguirás teniendo acceso hasta que termine el período que pagaste.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Hay algún tipo de descuento?</Accordion.Header>
          <Accordion.Body>
            <p>Sí, cada tanto lanzamos promos y descuentos especiales. Te recomendamos estar atento a nuestra web y redes sociales para no perderte ninguna oferta.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PreguntasFrecuentes;