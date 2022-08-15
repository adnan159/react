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
  const total = cart.reduce( ( sum, current ) => sum + current.price, 0 );

  return  (
    <div className="cart-bar">
      <h4>Cart Items</h4>
      {cart.map( item => <CartItems {...item} key={item.id}/>)}

      <div className="cart-items">
        <div className="item-info">
          <span>Total</span>
          <span>$ {total}</span>
        </div>
      </div>

    </div>
  );
}

export default Cart;