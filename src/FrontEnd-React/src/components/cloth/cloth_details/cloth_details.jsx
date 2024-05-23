import React, { Component } from 'react';
import './cloth_details.css';

class Cloth_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenda: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
  const id = this.extractId(window.location.href);

  fetch(`http://localhost:8000/api/clothes-details/${id}/`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch prenda details');
      }
    })
    .then(data => {
      this.setState({ prenda: data, isLoading: false });
    })
    .catch(error => this.setState({ error, isLoading: false }));
}

extractId(url) {
  const startIndex = url.indexOf('/clothes-details/') + '/clothes-details/'.length;
  const endIndex = url.indexOf('/', startIndex) !== -1 ? url.indexOf('/', startIndex) : url.length;
  return url.substring(startIndex, endIndex);
}

  render() {
    const { prenda, isLoading, error } = this.state;
    
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!prenda) {
      return <div>No data found</div>;
    }

    return (
      <div className="cloth-details">
        <img src={prenda.imagen_url} alt={prenda.descripcion} className="cloth-image" />
        <div className="cloth-info">
          <h2>{prenda.tipo_prenda} - {prenda.marca.nombre}</h2>
          <p><strong>Descripción:</strong> {prenda.descripcion}</p>
          <p><strong>Precio Original:</strong> {prenda.precio_original}€</p>
          {prenda.precio_rebajado > 0 && <p><strong>Precio Rebajado:</strong> {prenda.precio_rebajado}€</p>}
          <p><strong>Talla:</strong> {prenda.talla}</p>
          <p><strong>Cantidad en Stock:</strong> {prenda.cantidad_stock}</p>
          <p><strong>Material:</strong> {prenda.material}</p>
          <p><strong>Color:</strong> {prenda.color}</p>
          <p><strong>Género:</strong> {prenda.genero}</p>
        </div>
      </div>
    );
  }
}

export default Cloth_details;
    

