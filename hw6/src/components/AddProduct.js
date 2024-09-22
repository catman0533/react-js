// AddProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price: parseFloat(price),
      available
    };
    dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
