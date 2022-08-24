import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductDetails from './ProductList/ProductDetails';
import ThemeContex from './ThemeContex';
import Checkout from './Checkout/Checkout';
import Home from './Home/Home';

const App = () => {
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ dark, setDark ] = useState( false );

  const toogleDark = () => {
    setDark( isDark => ! isDark );
  };

  return (
    <ThemeContex.Provider
      value={{ dark: dark, toggle: toogleDark }}
    >
      <div className={`App ${dark ? "body-dark" : "body-light"}`}>
        <Router>
          <NavBar setSearchKeyword = { setSearchKeyword } />
          <Routes>
            <Route path="/" element={ <Home searchKeyword = { searchKeyword } /> } />
            <Route path="/checkout" element={ <Checkout /> } />
            <Route path="/product/:itemId" element={ <ProductDetails /> } />
          </Routes>
        </Router>
      </div>
    </ThemeContex.Provider>
  );
}

export default App;
