import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import useCart from './useCart';
import data from './data';

const App = () => {
  const [ products, setProducts ] = useState( [...data] );
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart([], products);

  useEffect(()=> {
    const result = data.filter( product => (product.brand.includes(searchKeyword) || product.brand.includes(searchKeyword)));
    setProducts(result);
  }, [searchKeyword]);


  return (
    <div className="App">
      <NavBar setSearchKeyword = { setSearchKeyword } />
      <ProductList products = { products } addCartItem = {addCartItem} />
      <Cart 
        cart = { cartItems } 
        removeCartItem={removeCartItem} 
        clearCart={clearCart} 
      />
    </div>
  );
}

export default App;
