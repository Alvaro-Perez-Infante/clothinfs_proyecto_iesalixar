import React, { Component } from 'react';
import './cardList.css';
import Filter from './filter/filter';
import { BASE_API_URL } from "../../constants";
import CreateAdmin from '../admin/admin';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prendas: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      itemsPerPage: 8,
    };
  }
  handleCardClick = (id) => {
    window.location.href = `/clothes-details/${id}`;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${BASE_API_URL}/api/clothes/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch prendas');
        }
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the data to inspect its structure
        if (Array.isArray(data)) {
          this.setState({ prendas: data, isLoading: false });
        } else {
          throw new Error('Data fetched is not an array');
        }
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log(BASE_API_URL)

    const { prendas, isLoading, error, currentPage, itemsPerPage } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = prendas.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className='MainCardList'>
        <div className="card-list">
          <div>
            <Filter/>
          </div>
          {currentItems.map(prenda => (
            <div className="card" key={prenda.id} onClick={() => this.handleCardClick(prenda.id)}>
              <img src={prenda.imagen_url} alt={prenda.nombre} className="card-image" />
              <div className="card-content">
                <div className="card-details">
                  <div><strong>Tipo Prenda:</strong> {prenda.tipo_prenda}</div>
                  <div><strong>Marca:</strong> {prenda.marca.nombre}</div>
                  <div><strong>Género:</strong> {prenda.genero}</div>
                  <div><strong>Precio:</strong> {prenda.precio_original}€</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
          <span>{` Página ${currentPage} de ${Math.ceil(prendas.length / itemsPerPage)} `}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(prendas.length / itemsPerPage)}>Siguiente</button>
        </div>
        <CreateAdmin/>
      </div>
    );
  }
}
