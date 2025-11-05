import React from "react";
import './Lk.css';

export default function Lk() {
  return (
    <div className="lk-container">
      <h2>Личный кабинет</h2>
      <p>Привет, пользователь!</p>

      <section className="lk-info">
        <h3>Мои данные</h3>
        <p>Имя: John Doe</p>
        <p>Email: example@mail.com</p>
      </section>

      <section className="lk-orders">
        <h3>Мои заказы</h3>
        <p>Пока заказов нет</p>
      </section>

      <section className="lk-settings">
        <h3>Настройки</h3>
        <button>Изменить пароль</button>
      </section>
    </div>
  );
}
