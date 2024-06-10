import React from "react";
import "./RegisterPage.css";
import { BASE_API_URL } from "../../../constants";

export class RegisterPage extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los datos del formulario
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      permissions: false, // Ajusta los permisos según sea necesario
    };

    // Realizar la solicitud POST para crear un nuevo usuario
    try {
      const response = await fetch(
        `${BASE_API_URL}/api/users/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Usuario creado exitosamente
        alert("¡Usuario creado exitosamente!");
        // Puedes redirigir a otra página o realizar otra acción aquí
        window.location.href = "/login"; 
      } else {
        // Error al crear el usuario
        alert("Error al crear el usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      // Manejar el error
    }
  };

  render() {
    return (
      <>
        <div className="RegisterPage-Container">
          <h3 className="titulo">Registro</h3>
          <p className="subtitulo">Por favor complete la siguiente información:</p>

          <form onSubmit={this.handleSubmit}>
            {" "}
            {/* Asociar el método handleSubmit al evento onSubmit del formulario */}
            <div className="form-group">
              <label>
                Nombre de Usuario:
                <input type="text" name="username" className="inputText" style={{ width: '100%' }} />
              </label>
              <br></br>
              <label>
                Correo Electrónico:
                <input type="email" name="email" className="inputText" style={{ width: '92%' }} />
              </label>
              <br></br>
              <label>
                Contraseña:
                <input type="password" name="password" className="inputText" style={{ width: '100%' }} />
              </label>
            </div>
            <br></br>
            <button className="botonInicioCrear" type="submit">
              CREAR UNA CUENTA
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterPage;
