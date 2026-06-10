import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Driftcart</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #333", padding: "15px", borderRadius: "10px" }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
