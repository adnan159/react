import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import useCart from './useCart';
import data from './data';
import ThemeContex from './ThemeContex';
import Checkout from './Checkout/Checkout';

const App = () => {
  const [ products, setProducts ] = useState( [...data] );
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ dark, setDark ] = useState( false );
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart( [], products );

  useEffect(() => {
    const result = data.filter( product => ( product.brand.includes( searchKeyword ) || product.title.includes( searchKeyword ) ) );
    setProducts( result );
  }, [ searchKeyword ] );

  const toogleDark = () => {
    setDark( isDark => ! isDark );
  };

  const Home = () => (
      <>
        <ProductList products = { products } addCartItem = { addCartItem } />
        <Cart 
          cart = { cartItems } 
          removeCartItem = { removeCartItem } 
          clearCart = { clearCart } 
        />
      </>
    );

  return (
    <ThemeContex.Provider
      value={{ dark: dark, toggle: toogleDark }}
    >
      <div className={`App ${dark ? "body-dark" : "body-light"}`}>
        <Router>
          <NavBar setSearchKeyword = { setSearchKeyword } />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </Router>
      </div>
    </ThemeContex.Provider>
  );
}

export default App;
