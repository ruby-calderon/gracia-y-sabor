import { Component } from 'react';
import '../css/nuestra-carta.css';

class NuestraCarta extends Component {
  state = {
    categoriaActiva: 'comida',
  };

  cambiarCategoria = (categoria) => {
    this.setState({ categoriaActiva: categoria });
  };

  comidas = [
    {
      id: 1,
      nombre: 'Lomo Saltado',
      descripcion: 'Jugoso lomo salteado con papas fritas y arroz.',
      precio: 'S/ 28.00',
      imagen: '/imagenes/lomo-saltado.jpg',
    },
    {
      id: 2,
      nombre: 'Ají de Gallina',
      descripcion: 'Receta tradicional cremosa con arroz blanco.',
      precio: 'S/ 25.00',
      imagen: '/imagenes/aji-gallina.jpg',
    },
    {
      id: 3,
      nombre: 'Arroz Chaufa',
      descripcion: 'Arroz salteado con pollo, huevo y verduras.',
      precio: 'S/ 22.00',
      imagen: '/imagenes/chaufa.jpeg',
    },
  ];

  bebidas = [
    {
      id: 1,
      nombre: 'Chicha Morada',
      descripcion: 'Bebida tradicional refrescante.',
      precio: 'S/ 8.00',
      imagen: '/imagenes/chicha-morada.jpg',
    },
    {
      id: 2,
      nombre: 'Limonada',
      descripcion: 'Limonada natural preparada al momento.',
      precio: 'S/ 7.00',
      imagen: '/imagenes/limonada.jpg',
    },
    {
      id: 3,
      nombre: 'Gaseosa',
      descripcion: 'Bebidas frías personales.',
      precio: 'S/ 6.00',
      imagen: '/imagenes/gaseosas.jpg',
    },
  ];

  render() {
    const { categoriaActiva } = this.state;
    const productosActivos = categoriaActiva === 'comida' ? this.comidas : this.bebidas;

    return (
      <main className="contenido-principal">
        <section className="encabezado-pagina">
          <h1>Nuestra Carta</h1>
          <hr className="linea-decorativa" />
        </section>

        <section className="carta">
          <div className="contenedor">
            <div className="tabs">
              <button
                className={`tab-btn ${categoriaActiva === 'comida' ? 'activo' : ''}`}
                onClick={() => this.cambiarCategoria('comida')}
              >
                Comida
              </button>
              <button
                className={`tab-btn ${categoriaActiva === 'bebidas' ? 'activo' : ''}`}
                onClick={() => this.cambiarCategoria('bebidas')}
              >
                Bebidas
              </button>
            </div>

            <div className="grid-carta">
              {productosActivos.map((item) => (
                <div key={item.id} className="plato">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="info-plato">
                    <h3>{item.nombre}</h3>
                    <p>{item.descripcion}</p>
                    <span className="precio">{item.precio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default NuestraCarta;
