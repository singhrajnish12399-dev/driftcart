import React from "react";

function App() {
  const [cartCount, setCartCount] = React.useState(0);
  const [cartItems, setCartItems] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [wishlistCount, setWishlistCount] = React.useState(0);
  const [wishlistItems, setWishlistItems] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const products = [
    { id: 1, category: "Fashion", name: "Zara Men's Slim Fit Shirt", price: "₹1,999", rating: "4.3", image: "https://unsplash.com" },
    { id: 2, category: "Fashion", name: "Levi's Denim Jacket", price: "₹3,499", rating: "4.5", image: "https://unsplash.com" },
    { id: 3, category: "Fashion", name: "H&M Oversized Hoodie", price: "₹2,299", rating: "4.2", image: "https://unsplash.com" },
    { id: 4, category: "Fashion", name: "Nike Sports Trackpants", price: "₹1,899", rating: "4.1", image: "https://unsplash.com" },
    { id: 5, category: "Fashion", name: "Ray-Ban Classic Aviator", price: "₹5,499", rating: "4.6", image: "https://unsplash.com" },
    { id: 6, category: "Electronics", name: "iPhone 15 Pro Max", price: "₹1,39,900", rating: "4.9", image: "https://unsplash.com" },
    { id: 7, category: "Electronics", name: "MacBook Air M3 Laptop", price: "₹1,14,900", rating: "4.8", image: "https://unsplash.com" },
    { id: 8, category: "Electronics", name: "Samsung 324L Double Door Fridge", price: "₹34,499", rating: "4.4", image: "https://unsplash.com" },
    { id: 9, category: "Electronics", name: "LG 1.5 Ton 5 Star Split AC", price: "₹42,999", rating: "4.5", image: "https://unsplash.com" },
    { id: 10, category: "Electronics", name: "Sony WH-1000XM4 Headphones", price: "₹19,999", rating: "4.7", image: "https://unsplash.com" },
    { id: 11, category: "Watches", name: "Casio Vintage Digital Watch", price: "₹1,695", rating: "4.3", image: "https://unsplash.com" },
    { id: 12, category: "Watches", name: "Fossil Grant Chronograph", price: "₹9,495", rating: "4.4", image: "https://unsplash.com" },
    { id: 13, category: "Watches", name: "Titan Neo analog Watch", price: "₹3,995", rating: "4.2", image: "https://unsplash.com" },
    { id: 14, category: "Watches", name: "Apple Watch Series 9", price: "₹41,900", rating: "4.7", image: "https://unsplash.com" },
    { id: 15, category: "Watches", name: "Tommy Hilfiger Sport Watch", price: "₹12,495", rating: "4.5", image: "https://unsplash.com" },
    { id: 16, category: "Shoes", name: "PUMA x one8 V2 Virat Kohli", price: "₹3,999", rating: "4.8", image: "https://unsplash.com" },
    { id: 17, category: "Shoes", name: "Nike Air Max Sneakers", price: "₹7,995", rating: "4.6", image: "https://unsplash.com" },
    { id: 18, category: "Shoes", name: "Adidas Ultraboost Running", price: "₹14,999", rating: "4.7", image: "https://unsplash.com" },
    { id: 19, category: "Shoes", name: "Bata Casual Loafers", price: "₹1,299", rating: "4.0", image: "https://unsplash.com" },
    { id: 20, category: "Shoes", name: "Woodland Leather Trekking Shoes", price: "₹4,295", rating: "4.4", image: "https://unsplash.com" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Kripya apna naam darj karein!");
      return;
    }
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <div style={{ background: "#2874f0", color: "white", padding: "30px", borderRadius: "15px", marginBottom: "30px" }}>
          <h1 style={{ margin: 0 }}>🛒 DriftCart</h1>
          <p style={{ margin: "10px 0 0 0", opacity: 0.9 }}>Shop Smart, Shop Fast</p>
        </div>
        <form onSubmit={handleLogin} style={{ border: "1px solid #ddd", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ marginBottom: "20px", color: "#333" }}>Login / Sign Up</h2>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>App ke andar products dekhne ke liye account banayein</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box", fontSize: "16px" }}
          />
          <button type="submit" style={{ width: "100%", background: "#2874f0", color: "white", border: "none", padding: "12px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
            Get Started 🚀
          </button>
        </form>
      </div>
    );
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "15px", paddingBottom: "80px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ background: "#2874f0", color: "white", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
        <h1>🛒 DriftCart</h1>
        <p style={{ marginTop: "-10px" }}>Shop Smart, Shop Fast</p>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>👤 User: <b>{username}</b></p>
        <div style={{ display: "flex", gap: "15px", background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
          <span>🛒 Cart: {cartCount}</span>
          <span>❤️ Wishlist: {wishlistCount}</span>
        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" }}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto", paddingBottom: "5px" }}>
        {["All", "Fashion", "Electronics", "Watches", "Shoes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 15px",
              borderRadius: "20px",
              border: "1px solid #2874f0",
              background: selectedCategory === cat ? "#2874f0" : "white",
              color: selectedCategory === cat ? "white" : "#2874f0",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ background: "#ffeb3b", padding: "15px", borderRadius: "10px", textAlign: "center", marginBottom: "20px", fontWeight: "bold", color: "#333" }}>
        🔥 Mega Sale - Up to 70% Off <br />
        🛍️ Free Delivery | ⚡ Fast Shipping
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
        <span>Welcome <b>{username}</b> 👋</span>
        <button onClick={() => { setIsLoggedIn(false); setUsername(""); }} style={{ background: "#ff4d4d", color: "white", border: "none", padding: "6px 12px", borderRadius: "5px", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      <h3 style={{ marginBottom: "15px" }}>{selectedCategory} Products ({filteredProducts.length})</h3>
      
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>Koi product nahi mila!</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", marginBottom: "15px", background: "white" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: "5px 0", fontSize: "16px" }}>{product.name}</h3>
              <span style={{ background: "green", color: "white", padding: "3px 8px", borderRadius: "5px", fontSize: "13px", fontWeight: "bold" }}>
                ⭐ {product.rating}
              </span>
            </div>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#2874f0", margin: "5px 0 15px 0" }}>{product.price}</p>
            
            <button
              onClick={() => {setCartCount(cartCount + 1); setCartItems([...cartItems, product]);}}
              style={{ background: "#2874f0", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
