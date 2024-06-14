import React, { useState, useEffect } from "react";
import "./navbar.css";
import BagIcon from "../../assets/BagIcon"; // Importa el componente BagIcon
import PersonIcon from "../../assets/PersonIcon"; // Importa el componente PersonIcon

const navbarDesplegable = "/navbarDesplegable.png";
const logo = "/logo.png";

const Navbar = () => {
  const [ropaOpen, setRopaOpen] = useState(false);
  const [marcasOpen, setMarcasOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable

  const handleMouseEnterRopa = () => {
    setRopaOpen(true);
  };

  const handleMouseLeaveRopa = () => {
    setRopaOpen(false);
  };

  const handleMouseEnterMarcas = () => {
    setMarcasOpen(true);
  };

  const handleMouseLeaveMarcas = () => {
    setMarcasOpen(false);
  };

  const handleRopaItemClick = (tipoPrenda) => {
    window.location.href = `/clothes/${tipoPrenda}`;
  };

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  // Función para manejar la apertura y cierre del menú desplegable
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div className="navbar">
      <div className="navbar-collapse-toggle" onClick={handleMenuToggle}>
        <img src={navbarDesplegable} alt="Menu" />
      </div>
      <div className="navbar-sections">
        <div
          className="navbar-section ropanavbar"
          onMouseEnter={handleMouseEnterRopa}
          onMouseLeave={handleMouseLeaveRopa}
        >
          <a href="/">ROPA</a>
          {ropaOpen && (
            <div className="ropa-menu">
              <a onClick={() => handleRopaItemClick("Sudaderas")}>Sudaderas</a>
              <a onClick={() => handleRopaItemClick("Camisetas")}>Camisetas</a>
              <a onClick={() => handleRopaItemClick("Camisas")}>Camisas</a>
              <a onClick={() => handleRopaItemClick("Polos")}>Polos</a>
              <a onClick={() => handleRopaItemClick("Pantalón")}>Pantalones</a>
              <a onClick={() => handleRopaItemClick("Faldas")}>Faldas</a>
              <a onClick={() => handleRopaItemClick("Top")}>Tops</a>
              <a onClick={() => handleRopaItemClick("Vestidos")}>Vestidos</a>
              <a onClick={() => handleRopaItemClick("Calcetines")}>Calcetines</a>
              <a onClick={() => handleRopaItemClick("Calzado")}>Calzado</a>
              <a onClick={() => handleRopaItemClick("Baño")}>Ropa de Baño</a>
              <a onClick={() => handleRopaItemClick("Accesorios")}>Accesorios</a>
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
        <a href="/shopping_cart">
          <BagIcon /> {/* Utiliza el componente BagIcon */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
