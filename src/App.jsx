import React from 'react';

// Product Data
const products = [
  { id: 1, name: "Premium T-Shirt", price: "499", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
  { id: 2, name: "Running Shoes", price: "1499", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: 3, name: "Wireless Headphones", price: "2999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 4, name: "Smart Watch", price: "1999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
];

function App() {
  return (
    <div style={{ backgroundColor: "#F6F6F6", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "80px" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1A73E8", padding: "15px", color: "white", position: "sticky", top: 0, zIndex: 1000 }}>
        <h2 style={{ margin: 0 }}>DriftCart</h2>
        <small>Your Shopping Destination</small>
      </div>

      {/* Search */}
      <div style={{ padding: "15px" }}>
        <input placeholder="Search for products..." style={{ width: "100%", padding: "10px", borderRadius: "20px", border: "1px solid #ddd" }} />
      </div>

      {/* Categories */}
      <div style={{ display: "flex", gap: "10px", padding: "0 15px", overflowX: "auto" }}>
        {["All", "Mobiles", "Fashion", "Best"].map(c => (
          <button key={c} style={{ padding: "8px 20px", borderRadius: "20px", border: "none", backgroundColor: c === "All" ? "#1A73E8" : "white" }}>{c}</button>
        ))}
      </div>

      {/* Products Grid */}
      <h3 style={{ padding: "15px" }}>Trending Products</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", padding: "0 15px" }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "5px" }} />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>{p.name}</p>
            <p style={{ color: "green" }}>₹{p.price}</p>
            <button style={{ width: "100%", backgroundColor: "#1A73E8", color: "white", border: "none", padding: "5px", borderRadius: "5px" }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "white", display: "flex", justifyContent: "space-around", padding: "15px", boxShadow: "0 -2px 5px rgba(0,0,0,0.1)" }}>
        <span>🏠 Home</span>
        <span>❤️ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Account</span>
      </div>
    </div>
  );
}

export default App;
