// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Page/SignupPageFolder/SignUp';
import EmailVerification from './Page/SignupPageFolder/EmailVerification';
import ProductDetailsPage from './Page/ProductDetailsPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
