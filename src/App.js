import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import NuestraCarta from './componentes/NuestraCarta';
import Ubicacion from './componentes/Ubicacion';
import RealizarPedido from './componentes/RealizarPedido';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/nuestra-carta" element={<NuestraCarta />} />
          <Route path="/realizar-pedido" element={<RealizarPedido />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
