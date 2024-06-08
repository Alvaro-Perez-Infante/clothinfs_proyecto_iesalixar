import React, { Component } from 'react';
import './blog.css';
import { BASE_API_URL } from "../../constants";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${BASE_API_URL}/api/news/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch noticias');
        }
      })
      .then(data => {
        this.setState({ noticias: data, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  handleCardClick = (id) => {
    window.location.href = `/blog/${id}`;
  }
  render() {
    const { noticias, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="blog">
        <h1>Noticias</h1>
        <div className="noticias-list">
          {noticias.map(noticia => (
            <div className="noticia-card" key={noticia.id} onClick={() => this.handleCardClick(noticia.id)}>
              <img src={noticia.imagen_url} alt={noticia.titulo} className="noticia-image" />
              <div className="noticia-content">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion_corta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
