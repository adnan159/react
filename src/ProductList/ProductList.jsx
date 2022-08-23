import React, { useContext } from 'react';
import ThemeContex from '../ThemeContex';
import ListProduct from './ListProduct'

const ProductList = ( { products, addCartItem } ) => {
  const { dark } = useContext(ThemeContex);

  return <div className={ `product-list ${dark ? "product-dark" : "product-light"}`}>
    {products.map((product) => {
      return <ListProduct {...product} key={product.id} addCartItem={addCartItem} />
    })}      
  </div>;
}

export default ProductList;