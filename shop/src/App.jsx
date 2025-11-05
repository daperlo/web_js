import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Lk from "./pages/Lk";
import "./App.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setCartOpen(!cartOpen);
  const addToCart = (item) => setCartItems([...cartItems, item]);
  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <Router>
      <Layout
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/Lk" element={<Lk />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
