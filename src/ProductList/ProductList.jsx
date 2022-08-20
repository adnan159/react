import React, { useContext } from 'react';
import ThemeContex from '../ThemeContex';

const Product = ( { id, title, brand, price, image_url, addCartItem } ) => {
  return (
    <div className="product">
        <img className="product-image" src={image_url} alt={title} />
        <div className="title">
            <div className="title">{title}</div>
            <div className="brand">{brand}</div>
        </div>
        <div className="action">
            <div className="price">${price}</div>
            <button className="add-to-cart" onClick={() =>addCartItem(id)} >Add to Cart</button>
        </div>
      </div>
  );
}

const ProductList = ( { products, addCartItem } ) => {
  const { dark } = useContext(ThemeContex);

  return <div className={ `product-list ${dark ? "product-dark" : "product-light"}`}>
    {products.map((product) => {
      return <Product {...product} key={product.id} addCartItem={addCartItem} />
    })}      
  </div>;
}

export default ProductList;