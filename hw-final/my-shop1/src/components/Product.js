import React from 'react';

const Product = ({ product, addToCart }) => (
  <div>
    <h2>{product.name}</h2>
    <p>Цена: ${product.price}</p>
    <p>Размер: {product.size}</p>
    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
  </div>
);

export default Product;