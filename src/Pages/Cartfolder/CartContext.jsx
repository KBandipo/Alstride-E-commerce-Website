// cartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
// Add more action types as needed

// Create the context
export const CartContext = createContext();

// Define the initial state
const initialState = {
  cartItems: [],
};

// Create action creators
const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId },
});

const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: productId, quantity },
});

// Create the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!action.payload || typeof action.payload !== 'object') {
        console.error('Invalid payload for ADD_TO_CART action:', action.payload);
        return state;
      }

      const existingProductIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product is in the cart, update the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) =>
            index === existingProductIndex
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // If the product is not in the cart, add it
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cartItems: updatedCartItems };

    case UPDATE_QUANTITY:
      const updatedQuantityCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cartItems: updatedQuantityCartItems };

    // Add other cases for handling color, size, etc.

    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart state, dispatch function, and action creators
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
