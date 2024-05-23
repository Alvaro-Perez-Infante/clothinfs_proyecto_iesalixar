import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Enlaces útiles</h5>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/about-us">Sobre nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Contacto</h5>
              <p>Dirección: 123 Calle Principal, Ciudad</p>
              <p>Teléfono: +123456789</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
