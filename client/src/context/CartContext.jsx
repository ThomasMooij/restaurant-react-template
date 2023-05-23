import React, { createContext, useState, useContext, useEffect } from 'react';

// Creëer een context voor de winkelwagen
const CartContext = createContext();

// CartProvider-component die de winkelwagenstatus bijhoudt
const CartProvider = ({ children }) => {
const localCart = JSON.parse(localStorage.getItem("cartItems"))

  const [cartItems, setCartItems] = useState(localCart != null ? localCart : []);
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const increaseCart = (id) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      }else {
        return currItems.map (item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity + 1}
          }else {
            return item
          }
        })
      }
    })
  }
  const decreaseCart = (id) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)?.quantity === 1) {
        return [...currItems, {id, quantity: 1}]
      }else {
        return currItems.map (item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity - 1}
          }else {
            return item
          }
        })
      }
    })
  }
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  // Functie om een item uit de winkelwagen te verwijderen
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  // Contextwaarde die wordt doorgegeven aan de onderliggende componenten
  const cartContextValue = {
    cartItems,
    setCartItems,
    increaseCart,
    removeFromCart,
    decreaseCart,
    getItemQuantity,
    cartQuantity,
    cartOpen,
    setCartOpen
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Aangepaste hook om de winkelwagencontext op te halen
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
