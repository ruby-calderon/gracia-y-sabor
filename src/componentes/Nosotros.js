import { Component } from 'react';
import '../css/nosotros.css';

class Nosotros extends Component {
  state = {
    imagenActual: 0,
  };

  imagenes = [
    '/imagenes/nosotros-imagen-1.png',
    '/imagenes/nosotros-imagen-2.png',
    '/imagenes/nosotros-imagen-3.png',
  ];

  anterior = () => {
    this.setState((imagen) => ({
      imagenActual: imagen.imagenActual === 0 ? this.imagenes.length - 1 : imagen.imagenActual - 1,
    }));
  };

  siguiente = () => {
    this.setState((imagen) => ({
      imagenActual: (imagen.imagenActual + 1) % this.imagenes.length,
    }));
  };

  cambiarImagen = (index) => {
    this.setState({ imagenActual: index });
  };

  render() {
    const { imagenActual } = this.state;

    return (
      <main className="contenido-principal">
        <section className="encabezado-pagina">
          <h1>Nuestra Historia</h1>
          <hr className="linea-decorativa" />
        </section>

        <section className="historia">
          <article>
            <blockquote>
              <h2>
                "Todo comenzó en una pequeña esquina de nuestro barrio, con una olla humeante y el sueño de compartir la
                sazón que mi abuela nos heredó"
              </h2>
            </blockquote>
            <p>
              Gracia y Sabor nació en las calles de Lima, donde el aroma del caldo de gallina y el anticucho recién hecho
              marcan el ritmo de la noche. Lo que empezó como un modesto puesto ambulante atendido por nuestra familia, se
              convirtió con los años en el refugio de quienes buscan ese sabor autentico que solo encuentras en casa.
            </p>
            <p>
              Nuestro compromiso siempre ha sido el mismo: tratar a cada cliente como si fuera un vecino de toda la vida.
              Aquí no solo servimos comida, servimos recuerdos y calor humano en cada plato. Somos un huarique con alma,
              raíces profundas y el corazón puesto en cada entrega.
            </p>
          </article>

          <aside>
            <div className="carrusel">
              <img src={this.imagenes[imagenActual]} alt="Nosotros" className="carrusel-imagen" />

              <button className="carrusel-btn carrusel-anterior" onClick={this.anterior}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="carrusel-btn carrusel-siguiente" onClick={this.siguiente}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              <div className="carrusel-dots">
                {this.imagenes.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === imagenActual ? 'activo' : ''}`}
                    onClick={() => this.cambiarImagen(index)}
                  />
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mision">
          <div className="mision-header">
            <h1>Nuestra Misión</h1>
          </div>
          <div className="contenedor-mision">
            <article>
              <img src="/imagenes/nosotros-icono-sarten.png" alt="Tradición" />
              <h2>Tradición</h2>
              <p>Preservar las recetas originales que definen nuestra identidad gastronómica limeña</p>
            </article>
            <article>
              <img src="/imagenes/nosotros-icono-estrella.png" alt="Sabor" />
              <h2>Sabor</h2>
              <p>Garantizar la máxima calidad y frescura en cada ingrediente que llega a tu mesa.</p>
            </article>
            <article>
              <img src="/imagenes/nosotros-icono-personas.png" alt="Familia" />
              <h2>Familia</h2>
              <p>Crear un ambiente donde todos se sientan parte de nuestra gran familia del barrio.</p>
            </article>
          </div>
        </section>
      </main>
    );
  }
}

export default Nosotros;
