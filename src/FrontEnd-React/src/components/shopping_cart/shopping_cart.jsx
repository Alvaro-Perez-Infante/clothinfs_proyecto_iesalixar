import React, { Component } from 'react';
import './shopping_cart.css';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // Aquí almacenaremos los artículos agregados al carrito
      total: 0, // Precio total del carrito
    };
  }

  // Método para agregar un artículo al carrito
  addToCart = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
      total: prevState.total + item.price,
    }));
  };

  // Método para enviar la información del carrito por correo electrónico
  sendEmail = () => {
    const { items, total } = this.state;

    // Aquí deberías implementar la lógica para enviar el correo electrónico
    // Por ejemplo, usando una API de servidor para enviar el correo electrónico con la información del carrito

    // Una vez enviado el correo, puedes limpiar el carrito
    this.setState({
      items: [],
      total: 0,
    });
  };

  render() {
    const { items, total } = this.state;

    return (
      <div className="shopping-cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {/* Aquí se mostrarán los artículos agregados al carrito */}
          {items.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong>Total:</strong> ${total}
        </div>
        <button onClick={this.sendEmail}>Comprar</button>
      </div>
    );
  }
}
