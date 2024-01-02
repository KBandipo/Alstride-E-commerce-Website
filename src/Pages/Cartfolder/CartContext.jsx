// CartContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

// Initial state for the cart
const initialState = {
  cartItems: [],
  totalAmount: 0, // Assuming totalAmount is part of your state
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // ... (existing logic to add a product to the cart)

    case 'REMOVE_FROM_CART':
      // Filter out the item with the specified id
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: calculateTotalAmount(updatedCartItems),
      };

    case 'UPDATE_QUANTITY':
      // Find the item with the specified id and update its quantity
      const updatedCartItemsWithQuantity = state.cartItems.map(item => 
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return {
        ...state,
        cartItems: updatedCartItemsWithQuantity,
        totalAmount: calculateTotalAmount(updatedCartItemsWithQuantity),
      };

    // Add other cases for different cart actions if needed
    default:
      return state;
  }
};

// Helper function to calculate the total amount based on the updated cart items
const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Create a context for the cart
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
