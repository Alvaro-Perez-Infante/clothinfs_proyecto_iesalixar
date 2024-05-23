import React, { Component } from 'react';
import './profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderHistoryExpanded: true
    };
  }

  toggleOrderHistory = () => {
    this.setState(prevState => ({
      isOrderHistoryExpanded: !prevState.isOrderHistoryExpanded
    }));
  };

  render() {
    const orders = [
      { id: 1, date: '2024-05-10', total: 25.99 },
      // Agrega más pedidos según sea necesario
    ];

    return (
      <div className="profile">
        <h2>Mi Perfil</h2>
        <div>
          <p>Nombre: </p>
          <p>Correo: </p>
          <p>Contraseña: </p>
        </div>
        <button>Editar Perfil</button>

        <div className="order-history">
          <h3>
            Historial de Pedidos
            <span onClick={this.toggleOrderHistory}>
                {this.state.isOrderHistoryExpanded ? "▲" : "▼"}
            </span>
          </h3>
          {this.state.isOrderHistoryExpanded && (
            <ul>
              {orders.map(order => (
                <li key={order.id}>
                  <p>Pedido #{order.id}</p>
                  <p>Fecha: {order.date}</p>
                  <p>Total: ${order.total}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
