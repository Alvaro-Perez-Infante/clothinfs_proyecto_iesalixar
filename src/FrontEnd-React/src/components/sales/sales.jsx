import React, { Component } from 'react';
import './sales.css'
import { BASE_API_URL } from "../../constants";


export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      itemsPerPage: 8,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${BASE_API_URL}/api/clothes/sales/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch sales');
        }
      })
      .then(data => {
        this.setState({ sales: data, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  handleCardClick = (id) => {
    window.location.href = `/clothes-details/${id}`;
  }
  render() {
    const { sales, isLoading, error,currentPage, itemsPerPage  } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sales.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
      if (currentPage < Math.ceil(prendas.length / itemsPerPage)) {
        this.setState({ currentPage: currentPage + 1 });
      }
    };

    const prevPage = () => {
      if (currentPage > 1) {
        this.setState({ currentPage: currentPage - 1 });
      }
    };
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="sales">
        <h1>Ofertas</h1>
        <div className="card-list">
          {sales.map(sale => (
            <div className="card" key={sale.id} onClick={() => this.handleCardClick(sale.id)}>
              <img src={sale.imagen_url} alt={sale.descripcion} className="card-image" />
              <div className="card-content">
                <h3>{sale.descripcion}</h3>
                <div>
                  <span style={{ color: 'orange' }}>Oferta: {sale.precio_rebajado}€</span>
                  <span style={{ textDecoration: 'line-through', color: 'black', marginLeft: '10px' }}>Antes: {sale.precio_original}€</span>
                </div>
                {/* Otros detalles de la oferta */}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
          <span>{` Página ${currentPage} de ${Math.ceil(sales.length / itemsPerPage)} `}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(sales.length / itemsPerPage)}>Siguiente</button>
        </div>
      </div>
    );
  }
}
