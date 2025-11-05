import React from "react";
import './Shop.css';

export default function Shop({ addToCart }) {
  const products = [
    { id: 1, name: "Мыло лаванда", price: 250 },
    { id: 2, name: "Свеча ароматическая", price: 400 },
    { id: 3, name: "Нижнее бельё", price: 1200 },
  ];

  return (
    <div className="shop-container">
      <h2>Магазин</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price} ₽</p>
            <button onClick={() => addToCart(product)}>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}
