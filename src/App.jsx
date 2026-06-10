import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Main Component
function App() {
  const [products, setProducts] = useState([]);

  // Data Fetching
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#F6F6F6", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1A73E8", padding: "15px", color: "white", textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
        DriftCart
      </div>

      {/* Product List */}
      <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <img src={p.imageUrl} alt={p.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "14px", margin: "10px 0" }}>{p.name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>₹{p.price}</p>
            <button style={{ width: "100%", padding: "8px", backgroundColor: "#1A73E8", color: "white", border: "none", borderRadius: "5px" }}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav Placeholder */}
      <div style={{ position: "fixed", bottom: 0, width: "100%", padding: "15px", backgroundColor: "white", display: "flex", justifyContent: "space-around", boxShadow: "0 -2px 5px rgba(0,0,0,0.1)" }}>
        <span>Home</span>
        <span>Wishlist</span>
        <span>Cart</span>
        <span>Account</span>
      </div>
    </div>
  );
}

export default App;
