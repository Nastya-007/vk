import React from "react";
import { Link } from "react-router-dom";

import "./logo.css";

const Logo = () => {
  return (
    <header className="header-logo">
      <h5>
        <button type="button" className="btn btn-secondary">
          <Link to="/my">
            Мой круг
            <i className="fa fa-book" />
          </Link>
        </button>

        <button type="button" className="btn btn-secondary">
          Контакты
        </button>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button" className="btn btn-secondary admin">
          <Link to="/admin">Я</Link>
        </button>
      </h5>
    </header>
  );
};

export default Logo;
