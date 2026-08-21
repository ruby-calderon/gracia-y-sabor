import { Component } from 'react';
import '../css/ubicacion.css';

class Ubicacion extends Component {
  render() {
    return (
      <main className="contenido-principal">
        <section className="location-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1951.31124129854!2d-77.1130545!3d-12.0006033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cd1b84991499%3A0xb90d89828066dc30!2sGracia%20y%20Sabor%20Caldo%20de%20Gallina!5e0!3m2!1ses-419!2spe!4v1771456303963!5m2!1ses-419!2spe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Gracia y Sabor"
            />
            <div className="map-badge">
              <h4>Huarique de Corazón</h4>
              <p>Te esperamos en el centro de la movida limeña con el mejor sabor de barrio.</p>
            </div>
          </div>

          <div className="info-container">
            <h1 className="title-accent">Encuéntranos</h1>

            <aside>
              <div className="info-item">
                <span className="material-symbols-outlined mi-icono">location_on</span>
                <div className="item-content">
                  <h3>
                    <strong>Dirección</strong>
                  </h3>
                  <p>
                    Asocicacion 7 de Agosto, Manzana D Lote 3, Callao 15112. Petit Thouars 1234,
                    <br />
                    Cercado de Lima, Lima, Perú
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined mi-icono">schedule</span>
                <div className="item-content">
                  <h3>
                    <strong>Horarios</strong>
                  </h3>
                  <ul className="schedule-list">
                    <li>
                      Lunes - Jueves: <span>6:00 PM - 12:00 AM</span>
                    </li>
                    <li>
                      Viernes - Sábado: <span className="highlight">6:00 PM - 3:00 AM</span>
                    </li>
                    <li>
                      Domingos: <span>5:00 PM - 11:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined mi-icono">call</span>
                <div className="item-content">
                  <h3>
                    <strong>Contacto</strong>
                  </h3>
                  <p>Central: (01) 456-7890</p>
                  <p>WhatsApp: +51 987 654 321</p>
                </div>
              </div>
            </aside>

            <a
              href="https://maps.app.goo.gl/Ncst2jtzYodRoUQ69"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <span className="material-symbols-outlined mi-icono">map</span>
              <strong>CÓMO LLEGAR</strong>
            </a>
          </div>
        </section>
      </main>
    );
  }
}

export default Ubicacion;
