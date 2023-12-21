import React, { useState } from 'react';
import './AddNewProduct.css';

function AddNewProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productColor, setProductColor] = useState('');
  const [message, setMessage] = useState('');

  const handleAddProduct = () => {
    // Add your logic for adding a new product here
    setMessage('Product added successfully!');
    // Add additional logic for updating the data
  };

  const handleFileChange = (e) => {
    // Add your logic for handling file change here
    // Access the selected file using e.target.files[0]
  };

  return (
    <div className="box">
      <h2 className="account-heading">Add New Product</h2>
      <div className="rectangleline1" />
      <div className="rectangle" />
      <div className="content">
        <form>
          <div className="info-row">
            <label className="label" htmlFor="productName">Product Name:</label>
            <div className="value">
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="info-row">
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label htmlFor="productPicture">Upload product picture:</label>
            <div className="value file-input-container">
              <input
                type="file"
                id="productPicture"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>

          <div className="info-row">
            <label htmlFor="productSize">Product Size:</label>
            <div className="value">
              <input
                type="text"
                id="productSize"
                value={productSize}
                onChange={(e) => setProductSize(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="info-row">
            <label htmlFor="productColor">Product Color:</label>
            <div className="value">
              <input
                type="text"
                id="productColor"
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="info-row">
            <label htmlFor="addProduct">&nbsp;</label>
            <button type="button" onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default AddNewProduct;
