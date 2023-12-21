import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Login from "./Login";
import Store from "./Store";
import ProductPage from "./ProductPage";
import SignUpAsBuyer from "./SignUpAsBuyer";
import SignUpAsSeller from "./SignUpAsSeller";
import Cart from "./Cart";
import BuyNow from "./BuyNow";
import ForgotPassword from "./ForgotPassword";

function App() {
  
  return (
    
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUpAsBuyer" element={<SignUpAsBuyer />} />
          <Route path="/SignUpAsSeller" element={<SignUpAsSeller />} />
          <Route path="/shop/:storeName" element={<Store />} />
          <Route path="/shop/:storeName/:productName" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
   
  );
}

export default App;
