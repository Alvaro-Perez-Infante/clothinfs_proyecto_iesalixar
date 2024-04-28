import React from "react";
import "./LoginPage.css";
import { Navigate } from 'react-router-dom'

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      loggedIn: false, // Nuevo estado para indicar si el usuario ha iniciado sesión
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: "", // Limpiar el mensaje de error al cambiar los campos
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los datos del estado
    const { username, password } = this.state;

    // Realizar la solicitud POST para iniciar sesión
    try {
      const response = await fetch("http://localhost:8000/api/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.message) {
        // Inicio de sesión exitoso
        this.setState({ loggedIn: true });
      } else {
        // Inicio de sesión fallido
        this.setState({ error: data.error });
      }
    } catch (error) {
      console.error("Error:", error);
      // Manejar el error de la solicitud
    }
  };

  render() {
    const { username, password, error, loggedIn } = this.state;

    // Si el usuario ha iniciado sesión, redirigir a la ruta /home
    if (loggedIn) {
      return <Navigate to="/home" />;
    }

    return (
      <div className="LoginPage-Container">
        <h1 className="titulo">ClothInfs</h1>
        <h3 className="titulo">Inicio de Sesión</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Nombre de Usuario:
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Contraseña:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="botonInicio" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
