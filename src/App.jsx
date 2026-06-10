import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Styling constants
const colors = { primary: "#1A73E8", white: "#ffffff", gray: "#7F8C8D", red: "#E74C3C" };

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) { console.error("Error:", e); }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#F6F6F6", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div style={{ backgroundColor: colors.primary, padding: "15px", color: colors.white, position: "sticky", top: 0, zIndex: 1000 }}>
        <h2 style={{ margin: 0, fontSize: "20px" }}>DriftCart</h2>
        <p style={{ fontSize: "10px", margin: 0 }}>Your Shopping Destination</p>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "15px" }}>
        <input placeholder="Search products..." style={{ width: "100%", padding: "10px", borderRadius: "20px", border: "1px solid #ddd" }} />
      </div>

      {/* Categories */}
      <div style={{ display: "flex", gap: "10px", padding: "0 15px", overflowX: "auto" }}>
        {["All", "Mobiles", "Fashion", "Electronics"].map(cat => (
          <button key={cat} style={{ padding: "8px 20px", borderRadius: "20px", border: "none", backgroundColor: cat === "All" ? colors.primary : colors.white }}>{cat}</button>
        ))}
      </div>

      {/* Trending Products */}
      <h3 style={{ padding: "15px" }}>Trending Products</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", padding: "0 15px" }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: colors.white, padding: "10px", borderRadius: "10px" }}>
            <img src={p.imageUrl} alt={p.name} style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "5px" }} />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>{p.name}</p>
            <p style={{ color: "green" }}>₹{p.price}</p>
            <button style={{ width: "100%", backgroundColor: colors.primary, color: colors.white, border: "none", padding: "5px", borderRadius: "5px" }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: colors.white, display: "flex", justifyContent: "space-around", padding: "15px", boxShadow: "0 -2px 5px rgba(0,0,0,0.1)" }}>
        <span>🏠 Home</span>
        <span>❤️ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Account</span>
      </div>
    </div>
  );
}

export default App;
