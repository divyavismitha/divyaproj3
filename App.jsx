import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContainer from "./AuthContainer"; 

import './AuthForm.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/" element={<AuthContainer />} />
          
         
          <Route path="/homepage" element={<homePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
