import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [cart, setCart] = useState([]);
  
  const handleSignup = async (e) => {
    e.preventDefault();
    alert("Signup function will be implemented here.");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    alert("Login function will be implemented here.");
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout. (Simulated)");
  };

  const products = [
    { name: 'Wireless Headphones', imgUrl: 'https://m.media-amazon.com/images/I/41lArSiD5hL.jpg', price: 59.99 },
    { name: 'Smartphone', imgUrl: 'https://image.made-in-china.com/202f0j00VaSMTUfWOekh/6-5-Inch-Screen-Android-Smartphone-Dual-SIM-3800mAh-4G-Smart-Mobile-Phone.webp', price: 399.99 },
    { name: 'Laptop', imgUrl: 'https://4.imimg.com/data4/SJ/BA/MY-3018414/apple-laptop-500x500.jpg', price: 799.99 },
    { name: 'Smartwatch', imgUrl: 'https://m.media-amazon.com/images/I/61bm7UEdGAL.jpg', price: 199.99 },
    { name: 'Bluetooth Speaker', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgjZwU9k9PQ4rH1BIoqU9De89fBR5vyvRrw&s', price: 89.99 },
    { name: 'Wireless Mouse', imgUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732533570/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/200055_0_q1zgsg.png', price: 29.99 },
    { name: 'Keyboard', imgUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXCL3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1728939673942', price: 49.99 },
    { name: 'LED TV', imgUrl: 'https://abmgroup.in/cdn/shop/products/40N5000_1.jpg?v=1571751602', price: 399.99 },
    { name: 'Gaming Chair', imgUrl: 'https://rukminim3.flixcart.com/image/850/1000/l1mh7rk0/gaming-chair/i/s/x/gaming-chair-ergonomic-seat-with-headrest-leather-gaming-chair-original-imagd55esqgfpzvc.jpeg?q=20&crop=false', price: 129.99 },
    { name: 'Action Camera', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX5Awi49PMJWbTrOWA_Q8Yi6Iec52DHywUg&s', price: 249.99 },
    { name: 'Portable Charger', imgUrl: 'https://m.media-amazon.com/images/I/614OfiBkyZL._AC_UF1000,1000_QL80_.jpg', price: 19.99 },
    { name: 'Electric Toothbrush', imgUrl: 'https://m.media-amazon.com/images/I/61ZW19O83XL._AC_UF1000,1000_QL80_.jpg', price: 39.99 },
    { name: 'Camera Lens', imgUrl: 'https://d2ajlz7o3p8ddv.cloudfront.net/media/products/thumbnails/thumb_vxSP2Dn.jpg', price: 499.99 },
    { name: 'Gaming Console', imgUrl: 'https://www.sony.co.in/image/83e724c6b5df327fc96f9c05d3ccc2ce?fmt=jpeg&wid=1200&qlt=43', price: 499.99 },
    { name: 'Smart Light Bulb', imgUrl: 'https://images-eu.ssl-images-amazon.com/images/I/618CqYWw41L._AC_UL330_SR330,330_.jpg', price: 15.99 },
    { name: 'E-Reader', imgUrl: 'https://i.guim.co.uk/img/media/bf1d1f667a1f24ff0c5658e92c1b41236c117497/238_407_4505_2704/master/4505.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e90f8b11da6b4f8d26cd9b46f8d926ab', price: 129.99 },
    { name: 'Home Security Camera', imgUrl: 'https://www.gensecurity.com/hs-fs/hubfs/Blog/Technician-installing-CCTV-Camera.jpg?width=1000&name=Technician-installing-CCTV-Camera.jpg', price: 119.99 },
    { name: 'Robot Vacuum', imgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_48/1512879/robot-vaccum-today-main-191126.jpg', price: 299.99 },
    { name: 'Portable Fan', imgUrl: 'https://images-cdn.ubuy.qa/643cdcf9c656cf4cef389bb6-easyacc-mini-portable-fan-mini-handheld.jpg', price: 24.99 },
    { name: 'VR Headset', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2OyHItUfyOm-rRHluX-WM8UE4-wJP8HH9g&s', price: 199.99 },
  ];

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <span>Sonu's Mini Store</span>
        <div className="auth-nav">
          <button onClick={handleSignup}>Signup</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              className="product-image"
              src={product.imgUrl}
              alt={product.name}
            />
            <div className="product-title">{product.name}</div>
            <div className="product-description">
              This is a description for {product.name}.
            </div>
            <div className="product-price">${product.price}</div>
            <button className="buy-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="cart-item">
              {product.name} - ${product.price}
              <button className="remove-button" onClick={() => handleRemoveFromCart(product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <strong>Total: ${calculateTotal()}</strong>
        </div>
        <button className="buy-now" onClick={handleCheckout}>
          Buy Now
        </button>
      </div>

      {/* Footer */}
      <footer>© 2025 Sonu's Mini Store</footer>
    </div>
  );
}

export default App;