import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';


import CardList from './components/cloth/cardList';


class App extends React.Component{

  render(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
}
export default App;
