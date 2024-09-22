// ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../store/productsSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => handleToggle(product.id)}>
              Toggle Availability
            </button>
            <button onClick={() => handleDelete(product.id)}>

            Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
