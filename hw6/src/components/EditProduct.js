// EditProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../productsSlice';

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleUpdateProduct = () => {
    dispatch(updateProduct({
      id: product.id,
      name,
      description,
      price: parseFloat(price),
      available
    }));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
};

export default EditProduct;
