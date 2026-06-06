import React from "react";

function App() {
  const [cartCount, setCartCount] = React.useState(0);
  const [cartItems, setCartItems] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [wishlistCount, setWishlistCount] = React.useState(0);
  const [wishlistItems, setWishlistItems] = React.useState([]);

  // Products array me maine unique ratings aur category add kar di hai
  const products = [
    { id: 1, name: "T-Shirt", price: "₹499", rating: "4.2", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { id: 2, name: "Shoes", price: "₹1499", rating: "4.5", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 3, name: "Watch", price: "₹999", rating: "4.0", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
    { id: 4, name: "Headphones", price: "₹1999", rating: "4.7", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" }
  ];

  // handleLogin function check karega ki naam khali na ho
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Kripya apna naam darj karein!");
      return;
    }
    setIsLoggedIn(true);
  };

  // Condition 1: Agar user logged in NAHI hai, toh sirf ye interface dikhega
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
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontSize: "16px"
            }}
          />
          
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#2874f0",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Get Started 🚀
          </button>
        </form>
      </div>
    );
  }

  // Condition 2: Login hote hi user direct is Main Page (Dashboard) par redirect ho jayega
  return (
    <div style={{ padding: "15px", paddingBottom: "80px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header Banner */}
      <div style={{ background: "#2874f0", color: "white", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "between", alignItems: "center" }}>
          <h1>🛒 DriftCart</h1>
        </div>
        <p style={{ marginTop: "-10px" }}>Shop Smart, Shop Fast</p>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>👤 User: <b>{username}</b></p>
        
        <div style={{ display: "flex", gap: "15px", background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
          <span>🛒 Cart: {cartCount}</span>
          <span>❤️ Wishlist: {wishlistCount}</span>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      {/* Categories */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
        <button style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #ddd", background: "#f5f5f5" }}>Fashion</button>
        <button style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #ddd", background: "#f5f5f5" }}>Electronics</button>
        <button style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #ddd", background: "#f5f5f5" }}>Watches</button>
        <button style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #ddd", background: "#f5f5f5" }}>Shoes</button>
      </div>

      {/* Offers Banner */}
      <div style={{ background: "#ffeb3b", padding: "15px", borderRadius: "10px", textAlign: "center", marginBottom: "20px", fontWeight: "bold", color: "#333" }}>
        🔥 Mega Sale - Up to 70% Off <br />
        🛍️ Free Delivery | ⚡ Fast Shipping
      </div>

      {/* Logout Button in Account Section area */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
        <span>Welcome <b>{username}</b> 👋</span>
        <button onClick={() => { setIsLoggedIn(false); setUsername(""); }} style={{ background: "#ff4d4d", color: "white", border: "none", padding: "6px 12px", borderRadius: "5px", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      {/* Product List */}
      <h3 style={{ marginBottom: "15px" }}>Trending Products</h3>
      {products
        .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
        .map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", marginBottom: "15px", background: "white" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: "5px 0" }}>{product.name}</h3>
              <span style={{ background: "green", color: "white", padding: "3px 8px", borderRadius: "5px", fontSize: "14px", fontWeight: "bold" }}>
                ⭐ {product.rating}
              </span>
            </div>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333", margin: "5px 0 15px 0" }}>{product.price}</p>
            
            <button
              onClick={() => {setCartCount(cartCount + 1); setCartItems([...cartItems, product]);}}
              style={{ background: "#2874f0", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {setWishlistCount(wishlistCount + 1); setWishlistItems([...wishlistItems, product]);}}
              style={{ marginLeft: "10px", padding: "10px 15px", borderRadius: "5px", border: "1px solid #ccc", background: "white", cursor: "pointer" }}
            >
              ❤️ Wishlist
            </button>
          </div>
        ))}

      {/* Bottom Navigation Bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-around", padding: "12px", boxShadow: "0 -2px 5px rgba(0,0,0,0.05)" }}>
        <span style={{ cursor: "pointer", fontWeight: "bold", color: "#2874f0" }}>🏠 Home</span>
        <span style={{ cursor: "pointer" }}>❤️ Wishlist ({wishlistCount})</span>
        <span style={{ cursor: "pointer" }}>🛒 Cart ({cartCount})</span>
        <span style={{ cursor: "pointer" }}>👤 Account</span>
      </div>
    </div>
  );
}

export default App;
