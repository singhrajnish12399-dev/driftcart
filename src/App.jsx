import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, name: 'Premium T-Shirt', price: 499, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500' },
    { id: 2, name: 'Running Shoes', price: 1499, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
    { id: 3, name: 'Wireless Headphones', price: 2999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 4, name: 'Smart Watch', price: 1999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>DriftCart</h1>
        <p>Your Shopping Destination</p>
        <div className="cart-icon">🛒 {cart}</div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more..." />
      </div>

      <div className="categories">
        <button className="active">🔥 All</button>
        <button>📱 Mobiles</button>
        <button>👕 Fashion</button>
      </div>

      <h2 className="section-title">Trending Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <span>🏠 Home</span>
        <span>❤️ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Account</span>
      </nav>
    </div>
  );
}

export default App;
