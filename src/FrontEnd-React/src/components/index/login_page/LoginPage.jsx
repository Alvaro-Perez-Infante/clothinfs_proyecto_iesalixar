import React from "react";
import "./LoginPage.css";
import { Navigate } from 'react-router-dom'
import { BASE_API_URL } from "../../../constants";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      loggedIn: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    try {
      const response = await fetch(`${BASE_API_URL}/api/users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.message) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ error: data.error });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { username, password, error, loggedIn } = this.state;

    if (loggedIn) {
      return <Navigate to="/home" />;
    }

    return (
      <div className="LoginPage-Container">
        <h3 className="titulo">Iniciar Sesión</h3>
        <p className="instrucciones">Por favor introduce su usuario y contraseña:</p>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Nombre de Usuario:
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                className="inputText"
              />
            </label>

            <label>
              Contraseña:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="inputText"
              />
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="botonInicio" type="submit">
            INICIAR SESIÓN
          </button>
        </form>
        <div className="registro-link">¿No tienes una cuenta? <a href="/register">Regístrate</a></div>
      </div>
    );
  }
}

export default LoginPage;
