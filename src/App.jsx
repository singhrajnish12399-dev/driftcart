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

  // Maine yahan par sabhi products ke liye high-quality aur stable image links daal diye hain
  const products = [
    { id: 1, category: "Fashion", name: "Zara Slim Shirt", price: "₹1,999", rating: "4.3", image: "https://pexels.com" },
    { id: 2, category: "Fashion", name: "Levi's Denim Jacket", price: "₹3,499", rating: "4.5", image: "https://pexels.com" },
    { id: 6, category: "Electronics", name: "iPhone 15 Pro Max", price: "₹1,39,900", rating: "4.9", image: "https://pexels.com" },
    { id: 7, category: "Electronics", name: "MacBook Air M3", price: "₹1,14,900", rating: "4.8", image: "https://pexels.com" },
    { id: 11, category: "Watches", name: "Casio Vintage Watch", price: "₹1,695", rating: "4.3", image: "https://pexels.com" },
    { id: 12, category: "Watches", name: "Fossil Chronograph", price: "₹9,495", rating: "4.4", image: "https://pexels.com" },
    { id: 16, category: "Shoes", name: "PUMA x one8 Virat Kohli", price: "₹3,999", rating: "4.8", image: "https://pexels.com" },
    { id: 17, category: "Shoes", name: "Nike Air Max Sneakers", price: "₹7,995", rating: "4.6", image: "https://pexels.com" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert("Kripya apna naam darj karein!");
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
          <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" }} />
          <button type="submit" style={{ width: "100%", background: "#2874f0", color: "white", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Get Started 🚀</button>
        </form>
      </div>
    );
  }

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && (selectedCategory === "All" || p.category === selectedCategory));

  return (
    <div style={{ padding: "15px", paddingBottom: "80px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ background: "#2874f0", color: "white", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
        <h1>🛒 DriftCart</h1>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>👤 User: <b>{username}</b> | 🛒 Cart: {cartCount} | ❤️ Wish: {wishlistCount}</p>
      </div>

      <input type="text" placeholder="🔍 Search products..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" }} />

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto", paddingBottom: "5px" }}>
        {["All", "Fashion", "Electronics", "Watches", "Shoes"].map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #2874f0", background: selectedCategory === cat ? "#2874f0" : "white", color: selectedCategory === cat ? "white" : "#2874f0", fontWeight: "bold", cursor: "pointer" }}>{cat}</button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
        <span>Welcome <b>{username}</b> 👋</span>
        <button onClick={() => { setIsLoggedIn(false); setUsername(""); }} style={{ background: "#ff4d4d", color: "white", border: "none", padding: "6px 12px", borderRadius: "5px", cursor: "pointer" }}>Logout</button>
      </div>

      <h3>{selectedCategory} Products ({filteredProducts.length})</h3>
      {filteredProducts.map(product => (
        <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", marginBottom: "15px", background: "white" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ margin: "5px 0" }}>{product.name}</h4>
            <span style={{ background: "green", color: "white", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>⭐ {product.rating}</span>
          </div>
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "#2874f0", margin: "5px 0 10px 0" }}>{product.price}</p>
          <button onClick={() => {setCartCount(cartCount + 1); setCartItems([...cartItems, product]);}} style={{ background: "#2874f0", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
          <button onClick={() => {setWishlistCount(wishlistCount + 1); setWishlistItems([...wishlistItems, product]);}} style={{ marginLeft: "10px", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ccc", background: "white", cursor: "pointer" }}>❤️ Wishlist</button>
        </div>
      ))}

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-around", padding: "12px" }}>
        <span onClick={() => setSelectedCategory("All")} style={{ cursor: "pointer", fontWeight: "bold", color: "#2874f0" }}>🏠 Home</span>
        <span>❤️ Wish ({wishlistCount})</span>
        <span>🛒 Cart ({cartCount})</span>
        <span>👤 Account</span>
      </div>
    </div>
  );
}
export default App;
