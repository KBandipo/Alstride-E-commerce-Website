import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Page/SignInPagefolder/SignIn';

function App() {
  return (
    <Router>
      <SignIn />
    </Router>
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./Page/resetPassword/ResetPassword";

import UpdatePassword from "./Page/updatePasswordPage/updatePassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="/" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
