import React from 'react';

const Product = ( { id, title, brand, price, image_url } ) => {
  return (
    <div className="product">
        <img className="product-image" src={image_url} alt={title} />
        <div className="title">
            <div className="title">{title}</div>
            <div className="brand">{brand}</div>
        </div>
        <div className="action">
            <div className="price">${price}</div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
  );
}

const ProductList = ( {products} ) => {
  return <div className="product-list">
    {products.map((product) => {
      return <Product {...product}/>
    })}      
  </div>;
}

export default ProductList;