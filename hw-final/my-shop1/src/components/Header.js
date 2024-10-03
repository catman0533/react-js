import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Главная</Link> | <Link to="/cart">Корзина</Link>
    </nav>
  </header>
);

export default Header;
