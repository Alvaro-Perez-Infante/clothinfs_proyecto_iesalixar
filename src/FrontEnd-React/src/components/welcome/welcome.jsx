import React from "react";
import { Link } from "react-router-dom";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeVariable } = this.props;

    return (
      <div>
        <h1>Esta es la página principal de la aplicación</h1>
        <button onClick={changeVariable}>
          <Link to="/">Cerrar Sesión</Link>
        </button>
      </div>
    );
  }
}

export default Welcome;
