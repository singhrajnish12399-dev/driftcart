import React from "react";

function App() {
  const [search, setSearch] = React.useState("");

  // Category Categories icons ke sath
  const categories = [
    { id: "foryou", n: "For You", i: "🎁" },
    { id: "fashion", n: "Fashion", i: "👕" },
    { id: "mobiles", n: "Mobiles", i: "📱" },
    { id: "beauty", n: "Beauty", i: "💄" },
    { id: "electronics", n: "Electronics", i: "💻" },
    { id: "home", n: "Home", i: "🏠" },
  ];

  // Grid/Scroll items ke liye dummy products
  const gridProducts = [
    { id: 1, name: "Laptops", i: "💻", bg: "#e3f2fd" },
    { id: 2, name: "Men's Slippers", i: "👟", bg: "#f1f8e9" },
    { id: 3, name: "Moisturizer", i: "🧴", bg: "#fff3e0" },
    { id: 4, name: "Sunglasses", i: "🕶️", bg: "#f3e5f5" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "450px", margin: "0 auto", background: "#f1f3f6", minHeight: "100vh", paddingBottom: "70px", boxSizing: "border-box" }}>
      
      {/* 1. Top Header Tab Toggle (Flipkart / Travel) */}
      <div style={{ display: "flex", background: "white", padding: "8px 12px", gap: "10px" }}>
        <button style={{ flex: 1, background: "#2874f0", color: "white", border: "none", padding: "10px", borderRadius: "8px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "14px" }}>
          🛒 Flipkart
        </button>
        <button style={{ flex: 1, background: "#f0f2f5", color: "#333", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "14px" }}>
          ✈️ Travel
        </button>
      </div>

      {/* 2. Delivery Location Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f0f5ff", padding: "8px 12px", borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ fontSize: "12px", color: "#333", display: "flex", alignItems: "center", gap: "4px" }}>
          📍 <span style={{ fontWeight: "600" }}>Kaup Kali Mandi, Rajput toli, Bhojpur...</span> ⬇️
        </div>
        <div style={{ fontSize: "12px", background: "amber", color: "#ff9f00", fontWeight: "bold", display: "flex", alignItems: "center" }}>
          ⚡ 0
        </div>
      </div>

      {/* 3. Search Bar Section (With Camera and Lens icon placeholders) */}
      <div style={{ padding: "10px 12px", background: "white" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#f0f2f5", borderRadius: "8px", padding: "2px 10px", border: "1px solid #ccc" }}>
          <span style={{ fontSize: "16px", color: "#888" }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search tv, mobiles, brands..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            style={{ width: "100%", padding: "10px 8px", background: "transparent", border: "none", outline: "none", fontSize: "14px" }} 
          />
          <span style={{ fontSize: "18px", marginRight: "10px", cursor: "pointer" }}>📷</span>
          <span style={{ fontSize: "18px", cursor: "pointer" }}>🔲</span>
        </div>
      </div>

      {/* 4. Horizontal Categories Scroll Menu */}
      <div style={{ display: "flex", gap: "15px", background: "white", padding: "12px 10px", overflowX: "auto", borderBottom: "1px solid #ddd" }}>
        {categories.map(c => (
          <div key={c.id} style={{ textAlign: "center", minWidth: "65px", cursor: "pointer" }}>
            <div style={{ fontSize: "22px", background: "#f9f9f9", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px auto", border: "1px solid #eee" }}>
              {c.i}
            </div>
            <span style={{ fontSize: "11px", color: "#333", fontWeight: "500" }}>{c.n}</span>
          </div>
        ))}
      </div>

      {/* 5. Exclusive Coupon Banner Section */}
      <div style={{ padding: "10px 12px" }}>
        <div style={{ background: "#e3f2fd", border: "1px dashed #2874f0", borderRadius: "8px", padding: "10px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#2874f0", fontWeight: "bold" }}>Exclusive coupon for you!</div>
            <div style={{ fontSize: "16px", fontWeight: "900", color: "#1a237e" }}>FLAT 10% OFF</div>
            <div style={{ fontSize: "10px", color: "#555" }}>Up to ₹100 • Already applied</div>
          </div>
          <div style={{ fontSize: "30px" }}>🛍️</div>
        </div>
      </div>

      {/* 6. Big Smartphone Launch Hero Banner Ads */}
      <div style={{ padding: "0 12px 10px 12px" }}>
        <div style={{ background: "linear-gradient(135deg, #0d47a1 0%, #002171 100%)", color: "white", borderRadius: "12px", padding: "20px", position: "relative", overflow: "hidden", minHeight: "130px" }}>
          <div style={{ fontSize: "12px", opacity: 0.8, fontWeight: "bold" }}>Flipkart 🛒</div>
          <h2 style={{ margin: "5px 0 2px 0", fontSize: "20px", fontWeight: "900" }}>realme P4R 5G</h2>
          <p style={{ margin: "0 0 5px 0", fontSize: "13px", color: "#ffeb3b", fontWeight: "bold" }}>Launch 10th June, 12 PM</p>
          <p style={{ margin: 0, fontSize: "11px", opacity: 0.9 }}>Biggest 8000mAh Battery*</p>
          
          {/* Absolute Background Graphics to match image feel */}
          <div style={{ position: "absolute", right: "-10px", bottom: "-10px", fontSize: "85px", opacity: 0.15, fontWeight: "900" }}>
            8000
          </div>
          <div style={{ position: "absolute", right: "20px", top: "25px", fontSize: "40px" }}>
            📱
          </div>
          <span style={{ position: "absolute", right: "10px", bottom: "10px", background: "rgba(0,0,0,0.4)", padding: "2px 5px", borderRadius: "3px", fontSize: "8px" }}>AD</span>
        </div>
      </div>

      {/* 7. Product Horizontal Scroll List (Like "Laptops", "Moisturizer") */}
      <div style={{ background: "white", padding: "15px 12px", marginBottom: "10px" }}>
        <div style={{ display: "flex", gap: "12px", overflowX: "auto" }}>
          {gridProducts.map(p => (
            <div key={p.id} style={{ minWidth: "90px", textAlign: "center" }}>
              <div style={{ width: "90px", height: "90px", background: p.bg, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "35px", marginBottom: "6px", border: "1px solid #f0f0f0" }}>
                {p.i}
              </div>
              <div style={{ fontSize: "11px", color: "#333", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Bottom Mini Banners Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", padding: "0 12px" }}>
        <div style={{ background: "#212121", color: "white", height: "60px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold", position: "relative" }}>
          Adidas 👟 <span style={{ position: "absolute", right: "4px", bottom: "2px", fontSize: "7px", opacity: 0.6 }}>AD</span>
        </div>
        <div style={{ background: "#d7ccc8", color: "#5d4037", height: "60px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold", position: "relative" }}>
          Minara 💍 <span style={{ position: "absolute", right: "4px", bottom: "2px", fontSize: "7px", opacity: 0.6 }}>AD</span>
        </div>
        <div style={{ background: "#e1bee7", color: "#4a148c", height: "60px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold", position: "relative" }}>
          Ninja 🥤 <span style={{ position: "absolute", right: "4px", bottom: "2px", fontSize: "7px", opacity: 0.6 }}>AD</span>
        </div>
      </div>

      {/* 9. Flipkart Sticky Professional Bottom Navigation Bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "white", borderTop: "1px solid #e0e0e0", display: "flex", justifyContent: "space-around", padding: "8px 0", zIndex: 1000, maxWidth: "450px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", flex: 1, cursor: "pointer", color: "#2874f0" }}>
          <div style={{ fontSize: "20px" }}>🏠</div>
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Home</span>
        </div>
        <div style={{ textAlign: "center", flex: 1, cursor: "pointer", color: "#666" }}>
          <div style={{ fontSize: "20px" }}>🎮</div>
          <span style={{ fontSize: "10px" }}>Play</span>
        </div>
        <div style={{ textAlign: "center", flex: 1, cursor: "pointer", color: "#666" }}>
          <div style={{ fontSize: "20px" }}>🔲</div>
          <span style={{ fontSize: "10px" }}>Categories</span>
        </div>
        <div style={{ textAlign: "center", flex: 1, cursor: "pointer", color: "#666" }}>
          <div style={{ fontSize: "20px" }}>👤</div>
          <span style={{ fontSize: "10px" }}>Account</span>
        </div>
        <div style={{ textAlign: "center", flex: 1, cursor: "pointer", color: "#666", position: "relative" }}>
          <div style={{ fontSize: "20px" }}>🛒</div>
          <span style={{ fontSize: "10px" }}>Cart</span>
          <span style={{ position: "absolute", top: "-4px", right: "12px", background: "#ff3d00", color: "white", borderRadius: "50%", padding: "1px 5px", fontSize: "9px", fontWeight: "bold" }}>7</span>
        </div>
      </div>

    </div>
  );
}

export default App;
