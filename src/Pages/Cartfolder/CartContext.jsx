// In your context or state management file
import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const CartContext = createContext();

// Define the initial state
const initialState = {
  cartItems: [],
};

// Create the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is in the cart, update the quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the product is not in the cart, add it
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    // Add other cases for removing from cart, clearing cart, etc.

    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart state and dispatch function
export const useCart = () => {
  return useContext(CartContext);
};
