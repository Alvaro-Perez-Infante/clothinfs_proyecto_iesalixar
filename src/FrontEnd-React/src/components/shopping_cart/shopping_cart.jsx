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
        {items.length > 0 && (
          <h2 className="cart-title-shop">Tu Carrito de Compras</h2>
        )}
        <div className="cart-items-list-shop">
          {/* Aquí se mostrarán los artículos agregados al carrito */}
          {items.length === 0 ? (
            <p>Su carrito está vacío</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="cart-item-shop">
                <span className="item-name-shop">{item.name}</span>
                <span className="item-price-shop">${item.price}</span>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-total-shop">
            <strong>Total:</strong> ${total}
          </div>
        )}
        <button className="buy-button-shop" onClick={this.sendEmail}>COMPRAR PRODUCTOS</button>
      </div>
    );
  }
}
