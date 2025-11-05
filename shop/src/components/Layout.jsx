import React from "react";
import Header_shop from "./Header";
import Footer_shop from "./Footer";

export default function Layout({ children, cartOpen, toggleCart, cartItems, removeFromCart }) {
  return (
    <div className="layout">
      <Header_shop cartItems={cartItems} toggleCart={toggleCart} />

      <main>{children}</main>

      <Footer_shop />

      {cartOpen && (
  <div className="cart-sidebar">
    <button className="close-cart" onClick={toggleCart}>✖</button>
    <h3>Корзина</h3>
    {cartItems.length === 0 ? (
      <p>Корзина пуста</p>
    ) : (
      cartItems.map((item, idx) => (
        <div key={idx} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price} ₽</span>
          <button className="remove-item" onClick={() => removeFromCart(idx)}>✖</button>
        </div>
      ))
    )}
    <button className="checkout-btn">Оформить заказ</button>
  </div>
)}

    </div>  );
}