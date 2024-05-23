import React, { Component } from 'react';
import './contact.css';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asunto: '',
      mensaje: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { asunto, mensaje } = this.state;

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ asunto, mensaje })
      });

      if (response.ok) {
        alert('Correo Enviado con Éxito');
        // Aquí puedes redirigir o hacer cualquier otra acción después de enviar el correo
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Error al enviar el correo');
      }
    } catch (error) {
      console.error(error);
      alert('Error al enviar el correo');
    }
  }

  render() {
    const { asunto, mensaje } = this.state;

    return (
      <div className="contact-container">
        <div className="form-container">
          <h2>Formulario de Contacto</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="asunto">Asunto:</label>
              <input type="text" id="asunto" name="asunto" value={asunto} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" value={mensaje} onChange={this.handleChange}></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}
