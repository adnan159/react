import React from 'react';

const CartItems = ({ id, title, price, quantity, removeCartItem }) => {
  return(
    <div className="cart-items">
      <button onClick={()=>removeCartItem(id)}>X</button>
      <div className="item-info">
        <span>{title} x {quantity} </span>
        <span>${price}</span>
      </div>
    </div>
  );
}

const Cart = ({cart, removeCartItem, clearCart }) => {
  const total = cart.reduce( ( sum, current ) => sum + current.price * current.quantity, 0 );

  return  (
    <div className="cart-bar">
      <h4>Cart Items</h4>

      {cart.length === 0 && (
        <div className="cart-items">
          <div className="item-info">
            <span>Cart is Empty ! </span>
          </div>
        </div>
      )}

      {cart.length !== 0 && (
        <>
          {cart.map( item => (
            <CartItems {...item} 
              price={ item.price * item.quantity } 
              key={item.id} 
              removeCartItem={removeCartItem} 
            />
          ))}      

          <div className="cart-items">
            <div className="item-info">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          </div>

          <div className="cart-items">
            <div className="action-buttons">
              <button className="clear-cart-button" onClick={clearCart} >Clear Cart</button>
              <button className="checkout-button">Checkout</button>
            </div>
          </div>
        </>
      )}     

    </div>
  );
}

export default Cart;