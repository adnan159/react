import {useState} from 'react';

const useCart = (init, products) => {
  const [ cartItems, setCartItem ] = useState( init );

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

  const clearCart = () => {
    const resposne = window.confirm("Are you sure to clear the cart?");
    if( resposne === true ) {
      setCartItem([]);
    }
  }

  return {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart
  }

}

export default useCart;