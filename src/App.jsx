import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Database se connect ho raha hai...");
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Data mil gaya:", data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Database error: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "20px", color: "white", backgroundColor: "#121212" }}>
        🔄 Data load ho raha hai...
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", backgroundColor: "#121212", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#4facfe" }}>Driftcart - Premium Store</h1>
      
      {products.length === 0 ? (
        <p style={{ textAlign: "center" }}>Koi product nahi mila database mein.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #333", borderRadius: "10px", padding: "15px", backgroundColor: "#1e1e1e", textAlign: "center" }}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} 
              />
              <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
              <p style={{ color: "#ffb400", fontWeight: "bold", fontSize: "18px" }}>₹{product.price}</p>
              <p style={{ color: "#aaa", fontSize: "14px" }}>⭐ {product.rating} / 5</p>
              <button style={{ width: "100%", padding: "10px", backgroundColor: "#4facfe", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
