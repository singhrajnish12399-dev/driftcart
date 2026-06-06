import React from "react";
function App() {
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [tab, setTab] = React.useState("Home");

  const products = [
    { id: 1, category: "Fashion", name: "Premium Black T-Shirt", price: 499, rating: "4.3 (120)", image: "https://unsplash.com" },
    { id: 2, category: "Shoes", name: "White Classic Sneakers", price: 1499, rating: "4.4 (98)", image: "https://unsplash.com" },
    { id: 3, category: "Watches", name: "Matte Black Watch", price: 999, rating: "4.5 (76)", image: "https://unsplash.com" },
    { id: 4, category: "Accessories", name: "Wireless Headphones", price: 1999, rating: "4.6 (65)", image: "https://unsplash.com" }
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <div style={{ background: "#2874f0", color: "white", padding: "25px", borderRadius: "12px", marginBottom: "20px" }}>
          <h2>🛒 DriftCart</h2><p style={{ margin: 0, opacity: 0.9 }}>Shop Smart, Shop Fast</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if(username.trim()) setIsLoggedIn(true); }} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ marginTop: 0 }}>Login / Sign Up</h3>
          <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }} />
          <button type="submit" style={{ width: "100%", background: "#2874f0", color: "white", border: "none", padding: "10px", borderRadius: "5px", fontWeight: "bold" }}>Get Started 🚀</button>
        </form>
      </div>
    );
  }

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && (cat === "All" || p.category === cat));
  const totalBill = cart.reduce((s, item) => s + item.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "0 auto", background: "#fff", minHeight: "100vh", paddingBottom: "60px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      {/* Top Blue Header */}
      <div style={{ background: "#2874f0", color: "white", padding: "12px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div><h3 style={{ margin: 0 }}>🟡 DriftCart</h3><span style={{ fontSize: "10px", opacity: 0.8 }}>Your Shopping Destination</span></div>
        <div style={{ display: "flex", gap: "15px", fontSize: "14px" }}>
          <span>❤️ Wish</span>
          <span onClick={() => setTab("Cart")} style={{ cursor: "pointer" }}>🛒 Cart <b>({cart.length})</b></span>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "10px 15px", background: "#2874f0" }}>
        <input type="text" placeholder="🔍 Search products, brands and more..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: "6px", border: "none", boxSizing: "border-box" }} />
      </div>

      {tab === "Home" && (
        <div>
          {/* Circular Categories Grid (Matching your photo) */}
          <div style={{ display: "flex", gap: "15px", background: "white", padding: "15px 10px", overflowX: "auto", borderBottom: "1px solid #f0f0f0" }}>
            {[{ id: "All", n: "All", i: "🎛️" }, { id: "Fashion", n: "Fashion", i: "👕" }, { id: "Electronics", n: "Mobiles", i: "💻" }, { id: "Shoes", n: "Footwear", i: "👟" }].map(c => (
              <div key={c.id} onClick={() => setCat(c.id)} style={{ textAlign: "center", minWidth: "60px", cursor: "pointer" }}>
                <div style={{ fontSize: "20px", background: cat === c.id ? "#2874f0" : "#f5f5f5", color: cat === c.id ? "white" : "#333", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px auto", border: "1px solid #ddd" }}>{c.i}</div>
                <span style={{ fontSize: "10px", color: "#333" }}>{c.n}</span>
              </div>
            ))}
          </div>

          {/* Big Savings Blue Banner Card */}
          <div style={{ padding: "12px" }}>
            <div style={{ background: "linear-gradient(135deg, #0d47a1, #1976d2)", borderRadius: "8px", padding: "15px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ background: "#ffea3b", color: "#000", padding: "2px 6px", fontSize: "10px", fontWeight: "bold", borderRadius: "3px" }}>BEST DEALS</span>
                <h2 style={{ margin: "5px 0 2px 0", fontSize: "20px" }}>Big Savings</h2>
                <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#ffeb3b", fontWeight: "bold" }}>On Top Brands</p>
              </div>
              <span style={{ fontSize: "50px" }}>⚡</span>
            </div>
          </div>

          <div style={{ padding: "0 12px 8px 12px", display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ margin: 0 }}>Best Deals for You</h4>
          </div>

          {/* 2-Column Responsive Layout Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", padding: "0 12px" }}>
            {filtered.map(p => (
              <div key={p.id} style={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "10px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <img src={p.image} style={{ width: "100%", height: "100px", objectFit: "contain", background: "#f9f9f9", borderRadius: "4px" }} />
                <div style={{ marginTop: "6px" }}>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</h4>
                  <p style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 4px 0" }}>₹{p.price}</p>
                  <div style={{ fontSize: "10px", color: "green" }}>★ {p.rating}</div>
                </div>
                <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "#2874f0", color: "white", border: "none", padding: "6px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold", marginTop: "6px" }}>
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "Cart" && (
        <div style={{ padding: "12px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
            <h4>Shopping Cart ({cart.length} Items)</h4>
            {cart.length === 0 ? <p style={{ textAlign: "center", color: "#666" }}>Cart khali hai! 🛒</p> : 
              <div>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: "1px solid #f0f0f0", alignItems: "center" }}>
                    <img src={item.image} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                    <div style={{ flex: 1 }}><h5>{item.name}</h5><p style={{ margin: 0, fontWeight: "bold", color: "#2874f0" }}>₹{item.price}</p></div>
                  </div>
                ))}
                <div style={{ marginTop: "12px", background: "#f9f9f9", padding: "8px", borderRadius: "6px", fontWeight: "bold", color: "green" }}>
                  Total Price: ₹{totalBill.toLocaleString("en-IN")}
                </div>
                <button style={{ width: "100%", background: "#fb641b", color: "white", border: "none", padding: "10px", borderRadius: "4px", fontWeight: "bold", marginTop: "10px" }}>Proceed to Checkout 🚀</button>
              </div>
            }
          </div>
        </div>
      )}

      {tab === "Account" && (
        <div style={{ padding: "12px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "8px", textAlign: "center", border: "1px solid #e0e0e0" }}>
            <div style={{ fontSize: "40px" }}>👤</div><h3>{username}</h3>
            <button onClick={() => { setIsLoggedIn(false); setUsername(""); setTab("Home"); }} style={{ width: "100%", background: "#ff4d4d", color: "white", border: "none", padding: "8px", borderRadius: "4px", fontWeight: "bold" }}>Logout Account</button>
          </div>
        </div>
      )}

      {/* Bottom App Navigation Bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-around", padding: "8px 0", zIndex: 200 }}>
        {[{ id: "Home", n: "Home", i: "🏠" }, { id: "Cart", n: "Orders", i: "📋" }, { id: "Account", n: "Account", i: "👤" }].map(t => (
          <div key={t.id} onClick={() => setTab(t.id)} style={{ textAlign: "center", cursor: "pointer", flex: 1 }}>
            <div style={{ fontSize: "16px" }}>{t.i}</div>
            <span style={{ fontSize: "11px", color: tab === t.id ? "#2874f0" : "#666", fontWeight: tab === t.id ? "bold" : "normal" }}>{t.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
