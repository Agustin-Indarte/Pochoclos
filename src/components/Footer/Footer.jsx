import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer'>
      <img className='img-footer' src="public\Logo-Pochoclos.png" alt="logo de pochoclos" />
      <p className='derechos'>© 2025 Pochoclos. Todos los derechos reservados.</p>
      <div className='redes'>
        <a href="" target="_blank" style={{ margin: '0 10px' }}>
          <i className="fab fa-facebook" style={{ fontSize: '30px' }}>
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px' }} />
          </i>
        </a>
        <a href="" target="_blank" style={{ margin: '0 10px' }}>
          <i className="fab fa-xtwitter" style={{ fontSize: '30px' }}>
          <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '30px' }} />
          </i>
        </a>
        <a href="" target="_blank" style={{ margin: '0 10px' }}>
          <i className="fab fa-instagram" style={{ fontSize: '30px' }}>
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }} />
          </i>
        </a>
        <a href="" target="_blank" style={{ margin: '0 10px' }}>
          <i className="fab fa-tiktok" style={{ fontSize: '30px' }}>
          <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '30px' }} />
          </i>
        </a>

      </div>
    </div>
  )
}

export default Footer