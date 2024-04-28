import React from 'react'
import './HomePage.css'
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

export class HomePage extends React.Component {

  state={
    visible:'main' // main, login, register
  }

  render() {

    const { visible } = this.state;

    return (
      <div className='HomePage-Container'>

       { visible == 'main' && (
          <div className='main-div'>
              <h1>Bienvenido a ClothInfs</h1>
              <button onClick={() => this.setState({ visible: 'login' })}>Inicio de Sesión</button>
              <button onClick={() => this.setState({ visible: 'register' })}>Registrarse</button>
          </div>
       )}

       { visible == 'login' && (
          <div className='main-div'>
              <LoginPage/>
              <button onClick={() => this.setState({ visible: 'main' })}>Volver al Inicio</button>
          </div>
       )}

       { visible == 'register' && (
          <div className='main-div'>
              <RegisterPage/>
              <button onClick={() => this.setState({ visible: 'main' })}>Volver al Inicio</button>
          </div>
       )}

      </div>
    )
  }
}

export default HomePage
