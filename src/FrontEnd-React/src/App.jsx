import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';

import Welcome from './components/welcome/welcome';
import LoginPage from './components/index/login_page/LoginPage';
import RegisterPage from './components/index/register_page/RegisterPage';
import AboutUs from './components/about_us/aboutUs';
import Contact from './components/contact/contact';
import Brand from './components/brand/brand';
import Navbar from './components/index/navbar/navbar';
import CardList from './components/cloth/cardList';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import Blog from './components/blog/blog';
import Sales from './components/sales/sales';
import News from './components/news/news';
import ShoppingCart from './components/shopping_cart/shopping_cart';
import Cloth_type_filter from './components/cloth/cloth_type_filter/cloth_type_filter';
import BrandClothes from './components/brand/brandClothes/brandClothes';
import Cloth_details from './components/cloth/cloth_details/cloth_details';
import Article_details from './components/blog/article_details/article_details';

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
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList/>}/>
          <Route path="/clothes/:tipo_prenda/" element={<Cloth_type_filter/>}/>
          <Route path="/clothes-details/:id/" element={<Cloth_details/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<Welcome changeVariable={this.changeVariableInIndex}/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/brands" element={<Brand/>}/>
          <Route path="/brands/:marca/" element={<BrandClothes/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id/" element={<Article_details/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/shopping_cart" element={<ShoppingCart/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
}
export default App;
