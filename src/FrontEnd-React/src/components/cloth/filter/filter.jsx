import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtros: [
        {
          nombre: "TALLA",
          opciones: ["XS", "S", "M"]
        },
        {
          nombre: "MARCA",
          opciones: ["Nike", "Adidas", "Puma"]
        },
        {
          nombre: "COLOR",
          opciones: ["Rojo", "Azul", "Verde"]
        },
        {
          nombre: "TIPO DE PRODUCTO",
          opciones: ["Camiseta", "Pantalón", "Zapato"]
        },
        {
          nombre: "GÉNERO",
          opciones: ["Hombre", "Mujer", "Unisex"]
        },
        {
          nombre: "PRECIO",
          opciones: null // Dejamos este campo como null para manejarlo de manera especial
        }
      ],
      filtrosAbiertos: {}, // Para almacenar el estado de cada filtro
      precioMin: 0, // Valor mínimo del rango de precio
      precioMax: 100 // Valor máximo del rango de precio
    };
  }

  // Función para alternar la visualización del menú de un filtro
  toggleFiltro = (nombreFiltro) => {
    this.setState(prevState => ({
      filtrosAbiertos: {
        ...prevState.filtrosAbiertos,
        [nombreFiltro]: !prevState.filtrosAbiertos[nombreFiltro]
      }
    }));
  };

  // Función para manejar cambios en el rango de precio
  handlePrecioChange = ([precioMin, precioMax]) => {
    this.setState({ precioMin, precioMax });
  };

  render() {
    return (
      <div className="filters-container">
        <div className='filters-title'>Filtros</div>
        {/* Mapea sobre los filtros para mostrarlos */}
        {this.state.filtros.map((filtro, index) => (
          <div key={index} className="filter-section">
            {/* Título del filtro */}
            <div className="filter-title" onClick={() => this.toggleFiltro(filtro.nombre)}>
              {/* Icono para indicar si el menú está abierto o cerrado */}
              {this.state.filtrosAbiertos[filtro.nombre] ? <span>▲</span> : <span>▼</span>}
              {filtro.nombre}
            </div>

            {/* Menú desplegable con opciones */}
            {this.state.filtrosAbiertos[filtro.nombre] && (
              <div className="filter-options">
                {/* Si es el filtro de PRECIO, muestra el selector de rango */}
                {filtro.nombre === "PRECIO" && (
                  <div className="filter-price">
                    <Slider
                      range
                      min={0}
                      max={100}
                      defaultValue={[this.state.precioMin, this.state.precioMax]}
                      onChange={this.handlePrecioChange}
                    />
                    <span>{this.state.precioMin} - {this.state.precioMax}</span>
                  </div>
                )}

                {/* Mapea sobre las opciones para mostrarlas */}
                {filtro.opciones && filtro.opciones.map((opcion, opcionIndex) => (
                  <div key={opcionIndex} className="filter-option">
                    <input type="checkbox" id={`filtro-${index}-${opcionIndex}`} />
                    <label htmlFor={`filtro-${index}-${opcionIndex}`}>{opcion}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Filter;
