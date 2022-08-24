import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import useCart from '../useCart';
import data from '../data';



const Home = ( {searchKeyword} ) => {
  const [ products, setProducts ] = useState( [...data] );
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart( [], products );

  useEffect(() => {
    const result = data.filter( product => ( product.brand.includes( searchKeyword ) || product.title.includes( searchKeyword ) ) );
    setProducts( result );
  }, [ searchKeyword ] );


  return ( 
    <>
      <ProductList products = { products } addCartItem = { addCartItem } />
      <Cart 
        cart = { cartItems } 
        removeCartItem = { removeCartItem } 
        clearCart = { clearCart } 
      />
    </> 
  );
}

export default Home;
      