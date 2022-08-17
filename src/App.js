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

    setCartItem((items) => {
      const itemIndex = items.findIndex( currentItem => currentItem.id === id );

      if( itemIndex === -1 ) {
          return [ ...items, {
            ...item,
            quantity:1
          }]
      } else {
        return items.map(currentItem => 
          currentItem.id === id 
          ? {
                  ...item,
                  quantity: parseInt(currentItem.quantity) + 1
            } : currentItem
        );
      }
    });
  }

  const removeCartItem = ( id ) => {
    setCartItem((items)=> items.filter( (item) => item.id !== id ));
  }

  return (
    <div className="App">
      <NavBar setSearchKeyword = { setSearchKeyword } />
      <ProductList products = { products } addCartItem = {addCartItem} />
      <Cart cart = { cartItems } removeCartItem={removeCartItem} />
    </div>
  );
}

export default App;
