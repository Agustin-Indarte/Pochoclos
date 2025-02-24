import './Dispositivos.css'
import { Container } from 'react-bootstrap'

function Dispositivos() {
  return (
    <div className="app-container">
      <div className="text-container">
        <h1>Disfrutalo cuando y donde quieras</h1>
        <p>Ya sea en tu celular, tablet, computadora o TV.</p>
      </div>
      <ContentList />
    </div>
  );
}

function ContentList() {
  const content = [
    { title: 'THE MARVELS', image: 'marvels.jpg' },
    { title: 'SHOGUN', image: 'shogun.jpg' },
    { title: 'LIBERTADORES', image: 'libertadores.jpg' },
    // Agrega más contenido aquí
  ];

  return (
    <div className="content-list">
      {content.map((item, index) => (
        <ContentItem key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
}

function ContentItem({ title, image }) {
  return (
    <div className="content-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Dispositivos;
