import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  const [filter, setFilter] = useState('Все');

  const filterProducts = (products, filter) => {
    if (filter === 'Все') return products;
    return products.filter(product => product.size === filter);
  };

  return (
    <div>
      <h1>Магазин</h1>
      {['Все', 'S', 'XS', 'M', 'L'].map(size => (
        <button key={size} onClick={() => setFilter(size)}>
          {size}
        </button>
      ))}
      {filterProducts(products, filter).map(product => (
        <Product key={product.name} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

