import React from "react";

function App() {
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [tab, setTab] = React.useState("Home");

  const products = [
    {
      id: 1,
      category: "Fashion",
      name: "Zara Slim Shirt",
      price: 1999,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1520975958225-8f1c3b8b8d2d?w=400"
    },
    {
      id: 2,
      category: "Fashion",
      name: "Levi's Jacket",
      price: 3499,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400"
    },
    {
      id: 6,
      category: "Electronics",
      name: "iPhone 15 Pro",
      price: 139900,
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1696446701902-5f2c1d2c8b7c?w=400"
    },
    {
      id: 7,
      category: "Electronics",
      name: "MacBook Air M3",
      price: 114900,
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
    },
    {
      id: 11,
      category: "Watches",
      name: "Casio Vintage",
      price: 1695,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 12,
      category: "Watches",
      name: "Fossil Chrono",
      price: 9495,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400"
    },
    {
      id: 16,
      category: "Shoes",
      name: "PUMA x one8 Kohli",
      price: 3999,
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400"
    },
    {
      id: 17,
      category: "Shoes",
      name: "Nike Air Max",
      price: 7995,
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400"
    }
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <div style={{ background: "#2874f0", color: "white", padding: "25px", borderRadius: "12px", marginBottom: "20px" }}>
          <h2>🛒 DriftCart</h2>
          <p style={{ margin: 0 }}>Shop Smart, Shop Fast</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); if (username.trim()) setIsLoggedIn(true); }}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button style={{ width: "100%", padding: "10px", background: "#2874f0", color: "white" }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (cat === "All" || p.category === cat)
  );

  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "0 auto", background: "#f1f3f6", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "#2874f0", color: "white", padding: "10px" }}>
        <h3>DriftCart - Hi {username}</h3>
      </div>

      {/* SEARCH */}
      <input
        style={{ width: "100%", padding: "10px" }}
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", padding: "6px" }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: "white", padding: "8px" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
            <h4 style={{ fontSize: "12px" }}>{p.name}</h4>
            <b>₹{p.price}</b>
            <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "#ff9f00", color: "white" }}>
              Add
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {tab === "Cart" && (
        <div style={{ padding: "10px", background: "white" }}>
          <h3>Cart Items</h3>
          {cart.map((i, idx) => (
            <div key={idx}>
              {i.name} - ₹{i.price}
            </div>
          ))}
          <h4>Total: ₹{total}</h4>
        </div>
      )}

      {/* NAV */}
      <div style={{ position: "fixed", bottom: 0, width: "100%", display: "flex", background: "white" }}>
        {["Home", "Cart", "Account"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "10px" }}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;