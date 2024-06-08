import React, { Component } from 'react';
import './article_details.css';
import { BASE_API_URL } from "../../../constants";

export default class Article_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const id = this.extractId(window.location.href);

    fetch(`${BASE_API_URL}/api/news/${id}/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch article details');
        }
      })
      .then(data => {
        this.setState({ article: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

  extractId(url) {
    const startIndex = url.lastIndexOf('/') + 1;
    const endIndex = url.indexOf('/', startIndex) !== -1 ? url.indexOf('/', startIndex) : url.length;
    return url.substring(startIndex, endIndex);
  }

  render() {
    const { article, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!article) {
      return <div>No data found</div>;
    }

    return (
      <div className="article-details">
        <div className="article-info">
          <h2>{article.titulo}</h2>
          <p><strong>Autor:</strong> {article.autor}</p>
          <p><strong>Fecha:</strong> {new Date(article.fecha).toLocaleDateString()}</p>
          <p><strong>Descripción corta:</strong> {article.descripcion_corta}</p>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.contenido }} />
        </div>
      </div>
    );
  }
}
