import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./Page/resetPassword/ResetPassword";
import UpdatePassword from "./Page/updatePasswordPage/updatePassword";
import LandingPage from "./Page/homePageFolder/LandingPage";
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails';
import ProductHome from './Pages/ProductDetailsPage/ProductHome';
import Cart from './Pages/Cartfolder/Cart';
import Navigation from './Pages/Cartfolder/Navigation';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
           <Route path="/product-home" element={<ProductHome />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" component={Cart} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
