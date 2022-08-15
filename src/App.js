import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import data from './data';

const App = () => {
  const [ products, setProducts ] = useState( [...data] );
  const [ cartItems, setCartItem ] = useState( [] );
  const [ searchKeyword, setSearchKeyword ] = useState("");

  useEffect(()=> {
    const result = data.filter( product => (product.brand.includes(searchKeyword) || product.brand.includes(searchKeyword)));
    setProducts(result);
  }, [searchKeyword]);

  const addCartItem = ( id ) => {
    const item = products.find(product => product.id === id );

    setCartItem((items) => [
      ...items,
      item
    ]);
  }

  return (
    <div className="App">
      <NavBar setSearchKeyword = { setSearchKeyword } />
      <ProductList products = { products } addCartItem = {addCartItem} />
      <Cart cart = { cartItems } />
    </div>
  );
}

export default App;
