import { useNavigate } from 'react-router-dom';
import '../css/inicio.css';

function Inicio() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="portada">
        <img src="/imagenes/inicio-hamburguesa-papas.png" className="portada-imagen" alt="Hamburguesa y papas" />
        <div className="portada-oscuro"></div>
        <div className="portada-contenido">
          <span className="portada-etiqueta">¡Abierto hasta las 3:00 AM!</span>
          <h1 className="portada-titulo">
            El verdadero sabor <br />
            <span>de barrio</span>
          </h1>
          <p className="portada-descripcion">
            Tu huarique de confianza. Caldos reconfortantes, broasters
            crujientes y ese saborcito casero que te alegra la noche.
          </p>
          <div className="portada-botones">
            <button className="boton-menu" onClick={() => navigate('/nuestra-carta')}>
              <span className="material-symbols-outlined">restaurant_menu</span> Ver Menú
            </button>
            <button className="boton-ubicacion" onClick={() => navigate('/ubicacion')}>
              <span className="material-symbols-outlined">location_on</span> Cómo llegar
            </button>
          </div>
        </div>
      </section>

      <section className="caracteristicas">
        <div className="contenedor">
          <article className="caracteristica">
            <span className="material-symbols-outlined caracteristica-icono">soup_kitchen</span>
            <h3 className="caracteristica-titulo">Sazón Casera</h3>
            <p className="caracteristica-texto">Recetas de la abuela preparadas con cariño.</p>
          </article>
          <article className="caracteristica caracteristica-centro">
            <span className="material-symbols-outlined caracteristica-icono">local_fire_department</span>
            <h3 className="caracteristica-titulo">Al Instante</h3>
            <p className="caracteristica-texto">Todo sale calientito y recién hecho.</p>
          </article>
          <article className="caracteristica">
            <span className="material-symbols-outlined caracteristica-icono">schedule</span>
            <h3 className="caracteristica-titulo">Madrugador</h3>
            <p className="caracteristica-texto">Te salvamos el hambre hasta la madrugada.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
