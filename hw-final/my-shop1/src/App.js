
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/Productlist';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { name: 'Футболка', price: 20, size: 'M' },
    { name: 'Джинсы', price: 40, size: 'L' },
    // другие товары
  ];

  const addToCart = product => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.name === product.name);
      if (item) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (product, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === product.name ? { ...item, quantity } : item
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateQuantity={updateQuantity} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
