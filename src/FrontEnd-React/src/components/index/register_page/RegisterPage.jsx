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
        <div className="card-main">
          <h1 className="titulo">ClothInfs</h1>
          <h3 className="titulo">Crear Cuenta</h3>

          <form onSubmit={this.handleSubmit}>
            {" "}
            {/* Asociar el método handleSubmit al evento onSubmit del formulario */}
            <div>
              <label>
                Nombre de Usuario:
                <input type="text" name="username" />
              </label>
              <br></br>
              <label>
                Correo Electrónico:
                <input type="email" name="email" />
              </label>
              <label>
                Contraseña:
                <input type="password" name="password" />
              </label>
            </div>
            <button className="botonInicio" type="submit">
              Confirmar Registrarse
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterPage;
