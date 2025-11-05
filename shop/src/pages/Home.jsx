import React from "react";
import './Home.css'; // <-- только стили этой страницы

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Atelier Lumière</h1>
        <p>
          Добро пожаловать в наш уютный магазин ручной работы. 
          Здесь вы найдёте ароматное мыло, свечи с натуральными маслами 
          и изысканное нижнее бельё, созданное с любовью.
        </p>
      </section>

      <section className="gallery">
        <img src="/images/soap1.jpg" alt="Мыло" />
        <img src="/images/candle1.jpg" alt="Свеча" />
        <img src="/images/lingerie1.jpg" alt="Бельё" />
      </section>
    </div>
  );
}
