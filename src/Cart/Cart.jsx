import React from 'react';

const CartItems = ({title, price}) => {
  return(
    <div className="cart-items">
      <button>X</button>
      <div className="item-info">
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}

const Cart = ({cart}) => {
  return  (
    <div className="cart-bar">
      <h4>Cart Items</h4>
      {cart.map( item => <CartItems {...item} key={item.id}/>)}
    </div>
  );
}

export default Cart;