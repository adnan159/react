import React, { useState, useContext } from 'react';
import ThemeContex from '../ThemeContex';

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

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [address, setAddress] = useState("");
  const { dark } = useContext(ThemeContex);

  const total = cart.reduce( ( sum, current ) => sum + current.price * current.quantity, 0 );

  const handleCheckout = () => {
    setCheckoutOpen(status => !status);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  return  (
    <div className={`cart-bar ${dark ? "cart-dark" : "cart-light"}`}>
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
              <button 
                className="checkout-button" 
                onClick={handleCheckout}
              >
                {checkoutOpen ? "Hide" : "Checkout"}
              </button>
            </div>
          </div>
        </>
      )} 

      {cart.length !== 0 && checkoutOpen === true && (
        <div className="cart-items">
          <div className="item-info">
            <span><input type="text" className="address-area" onChange={handleAddressChange}></input></span>
            <button style={{backgroundColor: !address ? "gray" : "#3b88c3"}} 
              className="checkout-button"
              onClick = {clearCart}
            >
                Checkout
            </button>
          </div>
        </div>
      )}    

    </div>
  );
}

export default Cart;