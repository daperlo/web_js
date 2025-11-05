import React from "react";
import "./ProductCard.css";

export default function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>
      <p>{price} ₽</p>
      <button>Купить</button>
    </div>
  );
}
