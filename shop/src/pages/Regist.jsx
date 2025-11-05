import React from "react";
import { Link } from "react-router-dom"; // важно импортировать Link
import './Regist.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Создать аккаунт</h2>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button>Зарегистрироваться</button>
        <Link to="/Lk" className="register-link">Уже есть аккаунт? Войти</Link>
      </div>
    </div>
  );
}
