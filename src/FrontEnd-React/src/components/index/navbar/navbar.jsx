import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ropaOpen: false,
      marcasOpen: false // Nuevo estado para controlar si el menú de MARCAS está abierto o cerrado
    };
  }

  handleMouseEnterRopa = () => {
    this.setState({
      ropaOpen: true
    });
  };

  handleMouseLeaveRopa = () => {
    this.setState({
      ropaOpen: false
    });
  };

  handleMouseEnterMarcas = () => {
    this.setState({
      marcasOpen: true
    });
  };

  handleMouseLeaveMarcas = () => {
    this.setState({
      marcasOpen: false
    });
  };

  handleRopaItemClick = (tipoPrenda) => {
    window.location.href = `/clothes/${tipoPrenda}`;
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-sections">
          <div className="navbar-section" onMouseEnter={this.handleMouseEnterRopa} onMouseLeave={this.handleMouseLeaveRopa}>
            <a href="/">ROPA</a>
            {this.state.ropaOpen && (
              <div className="ropa-menu">
                <a onClick={() => this.handleRopaItemClick('Sudaderas')}>Sudaderas</a>
                <a onClick={() => this.handleRopaItemClick('Camisetas')}>Camisetas</a>
                <a onClick={() => this.handleRopaItemClick('Camisas')}>Camisas</a>
                <a onClick={() => this.handleRopaItemClick('Polos')}>Polos</a>
                <a onClick={() => this.handleRopaItemClick('Pantalon')}>Pantalones</a>
                <a onClick={() => this.handleRopaItemClick('Faldas')}>Faldas</a>
                <a onClick={() => this.handleRopaItemClick('Top')}>Tops</a>
                <a onClick={() => this.handleRopaItemClick('Vestidos')}>Vestidos</a>
                <a onClick={() => this.handleRopaItemClick('Calcetines')}>Calcetines</a>
                <a onClick={() => this.handleRopaItemClick('Calzado')}>Calzado</a>  
                <a onClick={() => this.handleRopaItemClick('Baño')}>Ropa de Baño</a>
                <a onClick={() => this.handleRopaItemClick('Accesorios')}>Accesorios</a>
              </div>
            )}
          </div>
          <div className="navbar-section"><a href="/sales">OFERTAS</a></div>
          <div className="navbar-section"><a href="/news">NOVEDADES</a></div>
          <div className="navbar-section"><a href="/brands">MARCAS</a></div>
          <div className="navbar-section"><a href="/blog">BLOG</a></div>
          <div className="navbar-section"><a href="/about-us">SOBRE NOSOTROS</a></div>
          <div className="navbar-section"><a href="/contact">CONTACTA</a></div>
        </div>
        <div className="navbar-logo">
          <a href="/"><img src="/logo.png" alt="Logo" /></a>
        </div>
        <div className="navbar-profile">
          <a href="/login">Auth(temporal)</a>
          <a href="/profile">Perfil</a>
          <a href="/shopping_cart">Carrito</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
