import React from "react";
import { Link } from "react-router-dom";

export default function Header_shop({ toggleCart, cartItems }) {
  return (
    <header className="header">
      <h1>
        <Link to="/">Atelier Lumière</Link>
      </h1>
      <nav>
        <Link to="/Shop">Магазин</Link>
        <Link to="/Lk">Личный кабинет</Link>
        <Link to="/Register">
          <button>Регистрация</button>
        </Link>
        <button className="cart-button" onClick={toggleCart}>
          🛒 Корзина ({cartItems.length})
        </button>
      </nav>
    </header>
  );
}
