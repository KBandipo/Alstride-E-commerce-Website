import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./Page/resetPassword/ResetPassword";
import UpdatePassword from "./Page/updatePasswordPage/updatePassword";
import LandingPage from "./Page/homePageFolder/LandingPage";
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails';
import Cart from './Pages/Cartfolder/Cart';
// import Navigation from './Pages/Cartfolder/Navigation';
import SignIn from './Page/SignInPagefolder/SignIn';
import SignUp from './Page/SignupPageFolder/SignUp';
import EmailVerification from './Page/SignupPageFolder/EmailVerification';
import ProductPage from './Pages/ProductDetailsPage/ProductPage';
import AccountHome from './Pages/AccountPagedetails/AccountHome';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
           <Route path="/product-home" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} component={Cart} />
          <Route path="/account-home" element={<AccountHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
