import React from "react";

function App() {
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [tab, setTab] = React.useState("Home");

  // ✅ FIXED PRODUCTS (100% STABLE IMAGES)
  const products = [
    { id: 1, category: "Fashion", name: "Zara Slim Shirt", price: 1999, rating: "4.3", image: "https://placehold.co/400x400?text=Zara+Shirt" },

    { id: 2, category: "Fashion", name: "Levi's Jacket", price: 3499, rating: "4.5", image: "https://placehold.co/400x400?text=Levis+Jacket" },

    { id: 6, category: "Electronics", name: "iPhone 15 Pro", price: 139900, rating: "4.9", image: "https://placehold.co/400x400?text=iPhone+15+Pro" },

    { id: 7, category: "Electronics", name: "MacBook Air M3", price: 114900, rating: "4.8", image: "https://placehold.co/400x400?text=MacBook+Air" },

    { id: 11, category: "Watches", name: "Casio Vintage", price: 1695, rating: "4.3", image: "https://placehold.co/400x400?text=Casio+Watch" },

    { id: 12, category: "Watches", name: "Fossil Chrono", price: 9495, rating: "4.4", image: "https://placehold.co/400x400?text=Fossil+Watch" },

    { id: 16, category: "Shoes", name: "PUMA x one8 Kohli", price: 3999, rating: "4.8", image: "https://placehold.co/400x400?text=PUMA+Shoes" },

    { id: 17, category: "Shoes", name: "Nike Air Max", price: 7995, rating: "4.6", image: "https://placehold.co/400x400?text=Nike+Shoes" }
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <h2>🛒 DriftCart</h2>

        <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
          <input
            type="text"
            placeholder="Enter name"
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
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "auto", background: "#f1f3f6", minHeight: "100vh", paddingBottom: "60px" }}>

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

      {/* CATEGORY FILTER */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "10px" }}>
        {["All", "Fashion", "Electronics", "Watches", "Shoes"].map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ padding: "5px 10px" }}>
            {c}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", padding: "6px" }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: "white", padding: "8px", borderRadius: "6px" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
            <h4 style={{ fontSize: "12px" }}>{p.name}</h4>
            <b>₹{p.price}</b>
            <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "#ff9f00", color: "white" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {tab === "Cart" && (
        <div style={{ padding: "10px", background: "white" }}>
          <h3>Cart</h3>
          {cart.map((i, idx) => (
            <div key={idx}>{i.name} - ₹{i.price}</div>
          ))}
          <h4>Total: ₹{total}</h4>
        </div>
      )}

      {/* BOTTOM NAV */}
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