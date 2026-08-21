import { Component } from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="contenedor">
          <div className="footer-superior">
            <div>
              <h2>Gracia y Sabor</h2>
              <p>El auténtico sabor de barrio en el corazón de Lima.</p>
            </div>
            <div className="footer-enlaces">
              <Link to="/terminos-condiciones">Términos y Condiciones</Link>
              <Link to="/libro-reclamaciones">Libro de Reclamaciones</Link>
            </div>
          </div>
          <div className="footer-inferior">
            <p>© 2025 Gracia y Sabor. Todos los derechos reservados.</p>
            <div className="footer-redes">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
