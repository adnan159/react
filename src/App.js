import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import useCart from './useCart';
import data from './data';
import ThemeContex from './ThemeContex';

const App = () => {
  const [ products, setProducts ] = useState( [...data] );
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ dark, setDark ] = useState(false);
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart([], products);

  useEffect(()=> {
    const result = data.filter( product => (product.brand.includes(searchKeyword) || product.title.includes(searchKeyword)));
    setProducts(result);
  }, [searchKeyword]);

  const toogleDark = () => {
    setDark( isDark => !isDark );
  };


  return (
    <ThemeContex.Provider
      value={{ dark: dark, toggle: toogleDark }}
    >
      <div className={`App ${dark ? "body-dark" : "body-light"}`}>
        <NavBar setSearchKeyword = { setSearchKeyword } />
        <ProductList products = { products } addCartItem = {addCartItem} />
        <Cart 
          cart = { cartItems } 
          removeCartItem={removeCartItem} 
          clearCart={clearCart} 
        />
      </div>
    </ThemeContex.Provider>
  );
}

export default App;
