import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [tempName, setTempName] = useState("");

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const products = [
    { id: 1, name: "T-Shirt", price: "₹499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { id: 2, name: "Shoes", price: "₹1499", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 3, name: "Watch", price: "₹999", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
    { id: 4, name: "Headphones", price: "₹1999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" }
  ];

  // ---------------- LOGIN SCREEN ----------------
  if (!isLoggedIn) {
    return (
      <div style={styles.loginPage}>
        <h1 style={{ color: "#2874f0" }}>🛍️ DriftCart</h1>

        <div style={styles.loginBox}>
          <h2>Login / Signup</h2>

          <input
            placeholder="Enter your name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            style={styles.input}
          />

          <button
            style={styles.button}
            onClick={() => {
              if (tempName.trim() !== "") {
                setUsername(tempName);
                setIsLoggedIn(true);
              }
            }}
          >
            Enter App
          </button>
        </div>
      </div>
    );
  }

  // ---------------- MAIN APP ----------------
  return (
    <div>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>🛍️ DriftCart</h2>
        <p>Welcome {username} 👋</p>

        <button style={styles.logoutBtn} onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>

        <div>
          🛒 Cart: {cartCount} | ❤️ Wishlist: {wishlistCount}
        </div>
      </div>

      {/* SEARCH */}
      <input
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS */}
      <div style={styles.grid}>
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((p) => (
            <div key={p.id} style={styles.card}>
              <img src={p.image} style={{ width: "100%", borderRadius: 10 }} />
              <h3>{p.name}</h3>
              <p>{p.price}</p>

              <button onClick={() => setCartCount(cartCount + 1)} style={styles.btn}>
                Add to Cart
              </button>

              <button onClick={() => setWishlistCount(wishlistCount + 1)} style={styles.btn2}>
                ❤️ Wishlist
              </button>
            </div>
          ))}
      </div>

      {/* BOTTOM NAV */}
      <div style={styles.bottomNav}>
        <span>🏠 Home</span>
        <span>❤️ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Account</span>
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------
const styles = {
  loginPage: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f1f3f6"
  },
  loginBox: {
    padding: 20,
    background: "white",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    padding: 10,
    width: "100%",
    marginTop: 10
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    background: "#2874f0",
    color: "white",
    border: "none"
  },
  header: {
    background: "#2874f0",
    color: "white",
    padding: 15
  },
  logoutBtn: {
    marginTop: 10,
    padding: 5,
    background: "white",
    border: "none"
  },
  search: {
    width: "90%",
    padding: 10,
    margin: 10
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
    padding: 10
  },
  card: {
    border: "1px solid #ddd",
    padding: 10,
    borderRadius: 10
  },
  btn: {
    width: "100%",
    padding: 5,
    background: "#2874f0",
    color: "white",
    border: "none",
    marginTop: 5
  },
  btn2: {
    width: "100%",
    padding: 5,
    background: "red",
    color: "white",
    border: "none",
    marginTop: 5
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    background: "white",
    padding: 10
  }
};

export default App;