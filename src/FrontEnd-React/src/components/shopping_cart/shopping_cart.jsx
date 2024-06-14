import React, { Component } from 'react';
import axios from 'axios';
import './shopping_cart.css';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // Aquí almacenaremos los artículos agregados al carrito
      total: 0, // Precio total del carrito
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  // Método para obtener los datos del carrito desde el backend
  fetchCart = async () => {
    try {
      const response = await axios.get('/api/cart/');
      const cart = response.data;
      this.setState({
        items: cart.items,
        total: cart.items.reduce((sum, item) => sum + item.prenda.precio_rebajado * item.quantity, 0),
      });
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  // Método para agregar un artículo al carrito
  addToCart = async (prendaId) => {
    try {
      await axios.post(`/api/cart/add/${prendaId}/`);
      this.fetchCart(); // Actualizar el carrito después de añadir el artículo
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Método para eliminar un artículo del carrito
  removeFromCart = async (cartItemId) => {
    try {
      await axios.post(`/api/cart/remove/${cartItemId}/`);
      this.fetchCart(); // Actualizar el carrito después de eliminar el artículo
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  // Método para procesar el checkout
  checkout = async () => {
    try {
      await axios.post('/api/cart/checkout/');
      this.setState({
        items: [],
        total: 0,
      });
      alert('Compra realizada con éxito. Se ha enviado un correo con los detalles.');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
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
                <span className="item-name-shop">{item.prenda.tipo_prenda} - {item.prenda.marca.nombre}</span>
                <span className="item-price-shop">${item.prenda.precio_rebajado}</span>
                <span className="item-quantity-shop">Cantidad: {item.quantity}</span>
                <button onClick={() => this.removeFromCart(item.id)}>Eliminar</button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-total-shop">
            <strong>Total:</strong> ${total}
          </div>
        )}
        <button className="buy-button-shop" onClick={this.checkout}>COMPRAR PRODUCTOS</button>
      </div>
    );
  }
}
