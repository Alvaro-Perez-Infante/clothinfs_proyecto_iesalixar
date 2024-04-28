import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './components/index/HomePage';
import Welcome from './components/welcome/welcome';
import React from 'react';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      variableToChange: false // Variable que quieres cambiar en Index
    };
  }

  // Función para cambiar la variable en Index
  changeVariableInIndex = () => {
    this.setState({ variableToChange: true });
  };
  render(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<Welcome changeVariable={this.changeVariableInIndex}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
}
export default App;
