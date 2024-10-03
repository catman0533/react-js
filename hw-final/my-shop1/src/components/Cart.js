import React from 'react';

const Cart = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cart.map(item => (
          <div key={item.name}>
            <span>{item.name}</span>
            <span>Кол-во: </span>
            <input
              type="number"
              value={item.quantity}
              onChange={e => updateQuantity(item, parseInt(e.target.value))}
            />
            <span>Цена: ${item.price * item.quantity}</span>
          </div>
        ))
      )}
      <h2>ИТОГО: ${total}</h2>
    </div>
  );
};

export default Cart;
