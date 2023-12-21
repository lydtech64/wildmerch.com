import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPage({ match }) {
  const productId = match.params.productId;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error(`Error fetching product: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, description, price, quantity, category, image } = product;

  // Convert byte array to base64 for displaying images
  const imageSrc = image ? `data:image/png;base64,${btoa(new Uint8Array(image).reduce((data, byte) => data + String.fromCharCode(byte), ''))}` : null;

  return (
    <div>
      <h2>{name}</h2>
      {imageSrc && <img src={imageSrc} alt={name} style={{ maxWidth: "100%" }} />}
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>

      {/* Buttons */}
      <div>
        <button onClick={() => console.log(`Added ${name} to the cart`)}>
          Add to Cart
        </button>
        <button onClick={() => console.log(`Buy Now: ${name}`)}>Buy Now</button>
        <Link to={`/shop/${category}`}>Visit {category} Store</Link>
      </div>
    </div>
  );
}

export default ProductPage;
