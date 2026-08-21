import { Component } from 'react';
import '../css/realizar-pedido.css';

class RealizarPedido extends Component {
  state = {
    nombre: '',
    telefono: '',
    direccion: '',
    referencia: '',
    productoSeleccionado: '',
    cantidad: 1,
    pedidos: [],
    metodoPago: 'whatsapp',
  };

  productos = [
    { id: 1, nombre: 'Pollo Broaster Familiar', precio: 45 },
    { id: 2, nombre: 'Caldo de Gallina especial', precio: 36 },
    { id: 3, nombre: 'Arroz chaufa', precio: 22 },
    { id: 4, nombre: 'Salchipapa', precio: 18 },
    { id: 5, nombre: 'Pollo a la plancha', precio: 28 },
    { id: 6, nombre: 'Chicha morada', precio: 8 },
    { id: 7, nombre: 'Inca Kola', precio: 6 },
    { id: 8, nombre: 'Coca Cola', precio: 6 },
  ];

  handleProductoChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDatosChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  cambiarCantidad = (delta) => {
    const { cantidad } = this.state;
    const nuevaCantidad = cantidad + delta;
    if (nuevaCantidad >= 1) {
      this.setState({ cantidad: nuevaCantidad });
    }
  };

  agregarProducto = (e) => {
    e.preventDefault();
    const { productoSeleccionado, cantidad, pedidos } = this.state;

    if (!productoSeleccionado || cantidad < 1) {
      alert('Selecciona un producto y cantidad válida');
      return;
    }

    const producto = this.productos.find((p) => p.id === parseInt(productoSeleccionado));
    if (!producto) return;

    const nuevoItem = {
      id: Date.now(),
      ...producto,
      cantidad: parseInt(cantidad),
      subtotal: producto.precio * parseInt(cantidad),
    };

    this.setState({
      pedidos: [...pedidos, nuevoItem],
      productoSeleccionado: '',
      cantidad: 1,
    });
  };

  eliminarProducto = (id) => {
    this.setState({
      pedidos: this.state.pedidos.filter((item) => item.id !== id),
    });
  };

  calcularTotales = () => {
    const { pedidos } = this.state;
    const subtotal = pedidos.reduce((sum, item) => sum + item.subtotal, 0);
    const delivery = pedidos.length > 0 ? 5 : 0;
    const total = subtotal + delivery;
    return { subtotal, delivery, total };
  };

  enviarPedido = (e) => {
    e.preventDefault();
    const { nombre, telefono, direccion, pedidos } = this.state;

    if (!nombre || !telefono || !direccion || pedidos.length === 0) {
      alert('Completa todos los datos y agrega al menos un producto');
      return;
    }

    const { subtotal, delivery, total } = this.calcularTotales();
    const listaPedidos = pedidos.map((p) => `${p.nombre} x${p.cantidad}`).join('%0A');
    const mensaje = `Hola, quiero realizar un pedido:%0A%0A*Cliente:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Dirección:* ${direccion}%0A%0A*Productos:*%0A${listaPedidos}%0A%0A*Subtotal:* S/. ${subtotal.toFixed(2)}%0A*Delivery:* S/. ${delivery.toFixed(2)}%0A*Total:* S/. ${total.toFixed(2)}`;

    window.open(`https://wa.me/51943503149?text=${mensaje}`, '_blank');
  };

  render() {
    const { nombre, telefono, direccion, productoSeleccionado, cantidad, pedidos  } = this.state;
    const { subtotal, delivery, total } = this.calcularTotales();

    return (
      <main className="contenido-principal">
        <section className="encabezado-pagina">
          <h1>Realizar Pedido</h1>
          <hr className="linea-decorativa" />
        </section>

        <div className="pedido-container">
          {/* SECCIÓN SUPERIOR: PRODUCTOS + CARRITO */}
          <div className="pedido-upper">
            {/* FORM PRODUCTOS */}
            <form className="form-productos-nuevo" onSubmit={this.agregarProducto}>
              <h3>
                <span className="material-symbols-outlined">restaurant_menu</span>
                <strong>Selecciona Productos</strong>
              </h3>

              <div className="field-group">
                <label>
                  <strong>Producto *</strong>
                </label>
                <select
                  value={productoSeleccionado}
                  onChange={this.handleProductoChange}
                  name="productoSeleccionado"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  {this.productos.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nombre} - S/. {p.precio}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <label>
                  <strong>Cantidad *</strong>
                </label>
                <div className="cantidad-control">
                  <button type="button" onClick={() => this.cambiarCantidad(-1)}>
                    −
                  </button>
                  <input type="number" value={cantidad} readOnly />
                  <button type="button" onClick={() => this.cambiarCantidad(1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="buttons-productos">
                <button type="reset" className="btn-secondary">
                  Limpiar Todo
                </button>
                <button type="submit" className="btn-primary">
                  + Agregar al Pedido
                </button>
              </div>
            </form>

            {/* CARRITO */}
            <div className="carrito-section">
              <h3>
                <span className="material-symbols-outlined">shopping_basket</span>
                <strong>Tu Pedido</strong>
              </h3>

              {pedidos.length === 0 ? (
                <p className="carrito-vacio">Sin productos aún</p>
              ) : (
                <>
                  <div className="carrito-items">
                    {pedidos.map((item) => (
                      <div key={item.id} className="carrito-item">
                        <div className="item-info">
                          <strong>{item.nombre}</strong>
                          <small>x{item.cantidad}</small>
                        </div>
                        <div className="item-precio">
                          <strong>S/ {item.subtotal.toFixed(2)}</strong>
                          <button type="button" className="btn-delete" onClick={() => this.eliminarProducto(item.id)}>
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="carrito-totales">
                    <div className="total-line">
                      <span>Subtotal</span>
                      <span>S/ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="total-line">
                      <span>Delivery</span>
                      <span>S/ {delivery.toFixed(2)}</span>
                    </div>
                    <div className="total-line total-final">
                      <strong>Total</strong>
                      <strong>S/ {total.toFixed(2)}</strong>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* SECCIÓN DATOS */}
          <form className="form-datos-nuevo" onSubmit={this.enviarPedido}>
            <h3>
              <span className="material-symbols-outlined">person</span>
              <strong>Tus Datos</strong>
            </h3>

            <div className="datos-grid">
              <div className="field-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={this.handleDatosChange}
                  placeholder="Ej: Juan Perez"
                  required
                />
              </div>

              <div className="field-group">
                <label>Teléfono/WhatsApp</label>
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={this.handleDatosChange}
                  placeholder="Ej: +51 999 999 999"
                  required
                />
              </div>

              <div className="field-group full">
                <label>Dirección de Entrega</label>
                <input
                  type="text"
                  name="direccion"
                  value={direccion}
                  onChange={this.handleDatosChange}
                  placeholder="Calle, Número, Referencia"
                  required
                />
              </div>

            </div>

            <button type="submit" className="btn-confirmar">
              <i className="fa-brands fa-whatsapp"></i> CONFIRMAR PEDIDO POR WHATSAPP
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default RealizarPedido;
