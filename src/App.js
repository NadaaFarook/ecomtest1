import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";
import book from "./Book.png";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./pages/productListing";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
