
import React, { createContext, useContext, useReducer } from 'react';

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SELECT_COLOR = 'SELECT_COLOR';
const SELECT_SIZE = 'SELECT_SIZE';

// Create the context
export const CartContext = createContext();

// Define the initial state
const initialState = {
  cartItems: [],
};

// Define action creators
const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: productId, quantity },
});

const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId },
});

const selectColor = (productId, color) => ({
  type: SELECT_COLOR,
  payload: { id: productId, color },
});

const selectSize = (productId, size) => ({
  type: SELECT_SIZE,
  payload: { id: productId, size },
});

// Create the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
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
        // If the product is not in the cart, add it with selectedColor and selectedSize
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, selectedColor: '', selectedSize: '' }],
        };
      }

    case UPDATE_QUANTITY:
      const updatedQuantityCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cartItems: updatedQuantityCartItems };

    case REMOVE_FROM_CART:
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return { ...state, cartItems: nextCartItems };

    case SELECT_COLOR:
      const selectedColorCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, selectedColor: action.payload.color }
          : item
      );
      return { ...state, cartItems: selectedColorCartItems };

    case SELECT_SIZE:
      const selectedSizeCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, selectedSize: action.payload.size }
          : item
      );
      return { ...state, cartItems: selectedSizeCartItems };

    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch, addToCart, removeFromCart, updateQuantity, selectColor, selectSize }}>
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
