import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails';
import ProductHome from './Pages/ProductDetailsPage/ProductHome';
import Cart from './Pages/Cartfolder/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </Router>
  );
}

export default App;
