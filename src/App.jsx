import React from "react";

function App() {
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [tab, setTab] = React.useState("Home");

  // 1. Array me image properties add kar di gayi hain real image URLs ke sath
  const products = [
  { id: 1, category: "Fashion", name: "Zara Slim Shirt", price: 1999, rating: "4.3", image: "https://unsplash.com" },
  { id: 2, category: "Fashion", name: "Levi's Jacket", price: 3499, rating: "4.5", image: "https://unsplash.com" },
  { id: 6, category: "Electronics", name: "iPhone 15 Pro", price: 139900, rating: "4.9", image: "https://unsplash.com" },
  { id: 7, category: "Electronics", name: "MacBook Air M3", price: 114900, rating: "4.8", image: "https://unsplash.com" },
  { id: 11, category: "Watches", name: "Casio Vintage", price: 1695, rating: "4.3", image: "https://unsplash.com" },
  { id: 12, category: "Watches", name: "Fossil Chrono", price: 9495, rating: "4.4", image: "https://unsplash.com" },
  { id: 16, category: "Shoes", name: "PUMA x one8 Kohli", price: 3999, rating: "4.8", image: "https://unsplash.com" },
  { id: 17, category: "Shoes", name: "Nike Air Max", price: 7995, rating: "4.6", image: "https://unsplash.com" }
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
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "0 auto", background: "#f1f3f6", minHeight: "100vh", paddingBottom: "60px" }}>
      <div style={{ background: "#2874f0", color: "white", padding: "10px 15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
          <h3 style={{ margin: 0, fontStyle: "italic" }}>DriftCart</h3><span>Hi, {username} 👋</span>
        </div>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.15)", padding: "4px 8px", borderRadius: "4px" }}>📍 Deliver to: <b>Bhojpur, Bihar...</b></div>
      </div>

      <div style={{ padding: "8px 15px", background: "#2874f0" }}>
        <input type="text" placeholder="🔍 Search products, brands and more" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: "4px", border: "none", boxSizing: "border-box" }} />
      </div>

      {tab === "Home" && (
        <div>
          <div style={{ display: "flex", gap: "12px", background: "white", padding: "12px 10px", overflowX: "auto", borderBottom: "1px solid #ddd" }}>
            {[{ id: "All", n: "For You", i: "🎁" }, { id: "Fashion", n: "Fashion", i: "👕" }, { id: "Electronics", n: "Mobiles", i: "📱" }, { id: "Watches", n: "Watches", i: "⌚" }, { id: "Shoes", n: "Shoes", i: "👟" }].map(c => (
              <div key={c.id} onClick={() => setCat(c.id)} style={{ textAlign: "center", minWidth: "60px", cursor: "pointer" }}>
                <div style={{ fontSize: "20px", background: cat === c.id ? "#e0ecff" : "#f6f6f6", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px auto", border: cat === c.id ? "1.5px solid #2874f0" : "none" }}>{c.i}</div>
                <span style={{ fontSize: "11px", color: cat === c.id ? "#2874f0" : "#333" }}>{c.n}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", padding: "6px" }}>
            {filtered.map(p => (
              <div key={p.id} style={{ border: "1px solid #e0e0e0", borderRadius: "6px", padding: "8px", background: "white", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                
                {/* 2. Yahan par text placeholder div ko <img> tag se replace kiya gaya hai */}
                <img 
                  src={p.image} 
                  alt={p.name} 
                  style={{ width: "100%", height: "110px", objectFit: "cover", borderRadius: "4px" }} 
                />

                <span style={{ position: "absolute", top: "12px", right: "12px", background: "green", color: "white", padding: "1px 4px", borderRadius: "3px", fontSize: "10px" }}>★ {p.rating}</span>
                <div style={{ marginTop: "4px" }}>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</h4>
                  <p style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 6px 0" }}>₹{p.price.toLocaleString("en-IN")}</p>
                </div>
                <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "#ff9f00", color: "white", border: "none", padding: "5px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>+ Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart aur Account UI sections upar wale code ki tarah same rahenge */}
      {tab === "Cart" && (
        <div style={{ padding: "10px" }}>
          <div style={{ background: "white", padding: "12px", borderRadius: "6px" }}>
            <h4 style={{ margin: "0 0 10px 0" }}>My Cart ({cart.length} Items)</h4>
            {cart.length === 0 ? <p style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>Aapka cart khali hai! 🛒</p> : 
              <div>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "10px", padding: "8px 0", borderBottom: "1px solid #f0f0f0", alignItems: "center" }}>
                    {/* Cart me bhi item image use kar sakte hain */}
                    <img src={item.image} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "4px" }} />
                    <div><h5 style={{ margin: 0 }}>{item.name}</h5><p style={{ margin: 0, fontSize: "13px", fontWeight: "bold", color: "#2874f0" }}>₹{item.price}</p></div>
                  </div>
                ))}
                <div style={{ marginTop: "12px", background: "#f9f9f9", padding: "8px", borderRadius: "4px", fontSize: "13px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "green" }}><span>Total Amount:</span><span>₹{totalBill.toLocaleString("en-IN")}</span></div>
                </div>
                <button style={{ width: "100%", background: "#fb641b", color: "white", border: "none", padding: "10px", borderRadius: "4px", fontWeight: "bold", marginTop: "10px" }}>Proceed to Checkout 🚀</button>
              </div>
            }
          </div>
        </div>
      )}

      {tab === "Account" && (
        <div style={{ padding: "10px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "6px", textAlign: "center" }}>
            <div style={{ fontSize: "40px" }}>👤</div><h3>{username}</h3>
            <button onClick={() => { setIsLoggedIn(false); setUsername(""); setTab("Home"); }} style={{ width: "100%", background: "#ff4d4d", color: "white", border: "none", padding: "8px", borderRadius: "4px", fontWeight: "bold" }}>Logout Account</button>
          </div>
        </div>
      )}

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-around", padding: "6px 0", zIndex: 200 }}>
        {[{ id: "Home", n: "Home", i: "🏠" }, { id: "Cart", n: "Cart", i: `🛒${cart.length ? `(${cart.length})` : ""}` }, { id: "Account", n: "Account", i: "👤" }].map(t => (
          <div key={t.id} onClick={() => setTab(t.id)} style={{ textAlign: "center", cursor: "pointer", flex: 1 }}>
            <div style={{ fontSize: "16px" }}>{t.i}</div>
            <span style={{ fontSize: "10px", color: tab === t.id ? "#2874f0" : "#666", fontWeight: tab === t.id ? "bold" : "normal" }}>{t.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
