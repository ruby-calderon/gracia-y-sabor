import { Component } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    menuAbierto: false,
  };

  alternarMenu = () => {
    this.setState((estadoPrevio) => ({ menuAbierto: !estadoPrevio.menuAbierto }));
  };

  cerrarMenu = () => {
    this.setState({ menuAbierto: false });
  };

  render() {
    const { menuAbierto } = this.state;

    return (
      <nav className="navbar">
        <div className="contenedor">
          <Link to="/" className="logo" onClick={this.cerrarMenu}>
            Gracia y Sabor
          </Link>
          <input
            type="checkbox"
            id="menu-toggle"
            checked={menuAbierto}
            onChange={this.alternarMenu}
          />
          <label htmlFor="menu-toggle" className="navbar-toggler">
            <span className="material-symbols-outlined">menu</span>
          </label>
          <div className={`navbar-menu ${menuAbierto ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li>
                <Link to="/" onClick={this.cerrarMenu}>Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" onClick={this.cerrarMenu}>Nosotros</Link>
              </li>
              <li>
                <Link to="/nuestra-carta" onClick={this.cerrarMenu}>Nuestra Carta</Link>
              </li>
              <li>
                <Link to="/ubicacion" onClick={this.cerrarMenu}>Ubicación</Link>
              </li>
            </ul>
            <Link to="/realizar-pedido" className="boton-pedido" onClick={this.cerrarMenu}>
              Realizar Pedido
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
