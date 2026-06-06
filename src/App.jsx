import React from "react";

export default function App() {
  const [search, setSearch] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [tab, setTab] = React.useState("Home");
  const [cart, setCart] = React.useState([]);

  const products = [
    { id: 1, category: "Beauty", name: "Matte Lipstick", price: 499, image: "https://unsplash.com" },
    { id: 2, category: "Mobiles", name: "iPhone 15 Pro", price: 139900, image: "https://unsplash.com" },
    { id: 3, category: "Fashion", name: "Zara Shirt", price: 1999, image: "https://unsplash.com" },
    { id: 4, category: "Electronics", name: "MacBook M3", price: 114900, image: "https://unsplash.com" }
  ];

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && (cat === "All" || p.category === cat));
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "0 auto", background: "#f1f3f6", minHeight: "100vh", paddingBottom: "70px" }}>
      
      {/* HEADER */}
      <div style={{ background: "#2874f0", color: "white", padding: "12px", display: "flex", justifyContent: "space-between" }}>
        <b onClick={() => { setTab("Home"); setCat("All"); }} style={{ cursor: "pointer" }}>🛒 DriftCart</b>
        <span>⚡ Drift Travel</span>
      </div>

      {/* HOME TAB */}
      {tab === "Home" && (
        <div>
          <input type="text" placeholder="🔍 Search products..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "94%", padding: "10px", margin: "10px 3%", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }} />
          
          {/* CATEGORY SLIDER */}
          <div style={{ display: "flex", gap: "10px", background: "white", padding: "10px", overflowX: "auto" }}>
            {["All", "Fashion", "Mobiles", "Beauty", "Electronics"].map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ background: cat === c ? "#e0ecff" : "#f5f5f5", border: "none", padding: "6px 12px", borderRadius: "20px", fontWeight: "bold", color: cat === c ? "#2874f0" : "#333" }}>{c}</button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", padding: "10px" }}>
            {filtered.map(p => (
              <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "8px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "110px", objectFit: "cover", borderRadius: "4px" }} />
                <h4 style={{ margin: "4px 0", fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</h4>
                <p style={{ fontWeight: "bold", margin: "0 0 6px 0", fontSize: "14px" }}>₹{p.price.toLocaleString("en-IN")}</p>
                <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "#ff9f00", color: "white", border: "none", padding: "6px", borderRadius: "4px", fontWeight: "bold", fontSize: "12px" }}>+ Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CATEGORIES TAB */}
      {tab === "Categories" && (
        <div style={{ padding: "15px" }}>
          <h3>Shop by Category</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {["Fashion", "Mobiles", "Beauty", "Electronics"].map(c => (
              <div key={c} onClick={() => { setCat(c); setTab("Home"); }} style={{ background: "white", padding: "20px 10px", borderRadius: "8px", border: "1px solid #ddd", textAlign: "center", fontWeight: "bold", cursor: "pointer" }}>{c} →</div>
            ))}
          </div>
        </div>
      )}

      {/* CART TAB */}
      {tab === "Cart" && (
        <div style={{ padding: "12px" }}>
          <h3>My Cart ({cart.length})</h3>
          {cart.length === 0 ? <p style={{ textAlign: "center", color: "#666" }}>Cart khali hai! 🛒</p> : 
            <div>
              <div style={{ background: "white", borderRadius: "8px", border: "1px solid #ddd", padding: "10px" }}>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #eee" }}>
                    <span style={{ fontSize: "13px" }}>{item.name}</span>
                    <b style={{ fontSize: "13px" }}>₹{item.price}</b>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", borderTop: "1px dashed #ccc", paddingTop: "10px" }}>
                  <span>Total Bill:</span><b>₹{total.toLocaleString("en-IN")}</b>
                </div>
              </div>
              <button onClick={() => alert("Order Placed! 🎉")} style={{ width: "100%", background: "#fb641b", color: "white", border: "none", padding: "12px", borderRadius: "6px", fontWeight: "bold", marginTop: "10px" }}>Checkout 🚀</button>
            </div>
          }
        </div>
      )}

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-around", padding: "10px 0" }}>
        <div onClick={() => setTab("Home")} style={{ cursor: "pointer", color: tab === "Home" ? "#2874f0" : "#666" }}>🏠 Home</div>
        <div onClick={() => setTab("Categories")} style={{ cursor: "pointer", color: tab === "Categories" ? "#2874f0" : "#666" }}>🔲 Category</div>
        <div onClick={() => setTab("Cart")} style={{ cursor: "pointer", color: tab === "Cart" ? "#2874f0" : "#666" }}>🛒 Cart ({cart.length})</div>
      </div>

    </div>
  );
}
