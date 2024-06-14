import React, { Component } from "react";
import "./navbar.css";
import BagIcon from "../../assets/BagIcon"; // Importa el componente BagIcon
import PersonIcon from "../../assets/PersonIcon"; // Importa el componente PersonIcon
import SearchIcon from "../../assets/SearchIcon"; // Importa el componente SearchIcon


const navbarDesplegable = "/navbarDesplegable.png";
const logo = "/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ropaOpen: false,
      marcasOpen: false,
      collapsed: true,
      menuOpen: false, // Agregamos el estado para el menú desplegable
    };
  }

  handleMouseEnterRopa = () => {
    this.setState({ ropaOpen: true });
  };

  handleMouseLeaveRopa = () => {
    this.setState({ ropaOpen: false });
  };

  handleMouseEnterMarcas = () => {
    this.setState({ marcasOpen: true });
  };

  handleMouseLeaveMarcas = () => {
    this.setState({ marcasOpen: false });
  };

  handleRopaItemClick = (tipoPrenda) => {
    window.location.href = `/clothes/${tipoPrenda}`;
  };

  handleCollapseToggle = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  // Función para manejar la apertura y cierre del menú desplegable
  handleMenuToggle = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const { collapsed, menuOpen } = this.state;

    return (
      <div className="navbar">
        <div className="navbar-collapse-toggle" onClick={this.handleMenuToggle}>
          <img src={navbarDesplegable} alt="Menu" />
        </div>
        <div className="navbar-sections">
          <div
            className="navbar-section ropanavbar"
            onMouseEnter={this.handleMouseEnterRopa}
            onMouseLeave={this.handleMouseLeaveRopa}
          >
            <a href="/">ROPA</a>
            {this.state.ropaOpen && (
              <div className="ropa-menu">
                <a onClick={() => this.handleRopaItemClick("Sudaderas")}>
                  Sudaderas
                </a>
                <a onClick={() => this.handleRopaItemClick("Camisetas")}>
                  Camisetas
                </a>
                <a onClick={() => this.handleRopaItemClick("Camisas")}>
                  Camisas
                </a>
                <a onClick={() => this.handleRopaItemClick("Polos")}>Polos</a>
                <a onClick={() => this.handleRopaItemClick("Pantalón")}>
                  Pantalones
                </a>
                <a onClick={() => this.handleRopaItemClick("Faldas")}>Faldas</a>
                <a onClick={() => this.handleRopaItemClick("Top")}>Tops</a>
                <a onClick={() => this.handleRopaItemClick("Vestidos")}>
                  Vestidos
                </a>
                <a onClick={() => this.handleRopaItemClick("Calcetines")}>
                  Calcetines
                </a>
                <a onClick={() => this.handleRopaItemClick("Calzado")}>
                  Calzado
                </a>
                <a onClick={() => this.handleRopaItemClick("Baño")}>
                  Ropa de Baño
                </a>
                <a onClick={() => this.handleRopaItemClick("Accesorios")}>
                  Accesorios
                </a>
              </div>
            )}
          </div>
          <div className="navbar-section">
            <a href="/sales">REBAJADO</a>
          </div>
          <div className="navbar-section">
            <a href="/news">NOVEDADES</a>
          </div>
          <div className="navbar-section">
            <a href="/brands">MARCAS</a>
          </div>
          <div className="navbar-section">
            <a href="/blog">BLOG</a>
          </div>
          <div className="navbar-section">
            <a href="/about-us">SOBRE CLOTHINFS</a>
          </div>
          <div className="navbar-section">
            <a href="/contact">CONTACTA</a>
          </div>
        </div>
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        {/* Contenedor del menú desplegable */}
        <div className={`navbar-dropdown ${menuOpen ? "show" : ""}`}>
          {menuOpen && (
            <React.Fragment>
              <div className="navbar-section">
                <a href="/sales">REBAJADO</a>
              </div>
              <div className="navbar-section">
                <a href="/news">NOVEDADES</a>
              </div>
              <div className="navbar-section">
                <a href="/brands">MARCAS</a>
              </div>
             
              <div className="navbar-section">
                <a href="/blog">BLOG</a>
              </div>
              <div className="navbar-section">
                <a href="/about-us">SOBRE NERETY</a>
              </div>
              <div className="navbar-section">
                <a href="/contact">CONTACTA</a>
              </div>
            </React.Fragment>
          )}
        </div>

         <div className="navbar-profile">
          <a href="/login">
            <PersonIcon /> {/* Utiliza el componente PersonIcon */}
          </a>
          <a href="/search">
            <SearchIcon /> {/* Utiliza el componente SearchIcon */}
          </a>
          <a href="/shopping_cart">
            <BagIcon /> {/* Utiliza el componente BagIcon */}
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
