import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Pages/Cartfolder/CartContext';
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails';
import ProductHome from './Pages/ProductDetailsPage/ProductHome';
import CartPage from './Pages/Cartfolder/CartPage';
import Navigation from './Pages/Cartfolder/Navigation';

function App() {
  return (
    <Router>
    <CartProvider>
      <Navigation/>
        <Routes>
          <Route path="/" element={<ProductHome />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </CartProvider>
      </Router>
    
  );
}

export default App;
