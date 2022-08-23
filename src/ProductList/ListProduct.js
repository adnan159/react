import React from 'react';
import {
  Link
} from "react-router-dom";

const ListProduct = ( { id, title, brand, price, image_url, addCartItem } ) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img className="product-image" src={image_url} alt={title} />
        <div className="title">
            <div className="title">{title}</div>
            <div className="brand">{brand}</div>
        </div>
      </Link>
      <div className="action">
          <div className="price">${price}</div>
          <button className="add-to-cart" onClick={() =>addCartItem(id)} >Add to Cart</button>
      </div>
    </div>
  );
}

export default ListProduct;
