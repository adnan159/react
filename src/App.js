import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import data from './data';

const App = () => {
  const [ products, setProducts ] = useState( [...data] );
  const [ searchKeyword, setSearchKeyword ] = useState("");

  useEffect(()=> {
    const result = data.filter( product => (product.brand.includes(searchKeyword) || product.title.includes(searchKeyword)));
    setProducts(result);
  }, [searchKeyword]);

  return (
    <div className="App">
      <NavBar setSearchKeyword = { setSearchKeyword } />
      <ProductList products = { products } />
      <Cart />
    </div>
  );
}

export default App;
