import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer'>
      <img className='img-footer' src="public\Logo-Pochoclos.png" alt="logo de pochoclos" />

      <p>© 2025 Pochoclos. Todos los derechos reservados.</p>
      <div className='redes'>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTiktok} />
        </a>

      </div>
    </div>
  )
}

export default Footer