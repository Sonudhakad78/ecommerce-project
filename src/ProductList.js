import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Backend se data fetch
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '15px',
                width: '200px',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              <p style={{ fontSize: '12px' }}>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;