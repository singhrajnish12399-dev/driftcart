import React from "react";
function App() {
const [cartCount, setCartCount] = React.useState(0);
const [search, setSearch] = React.useState("");
  const products = [
    { id: 1, name: "T-Shirt", price: "₹499" },
    { id: 2, name: "Shoes", price: "₹1499" },
    { id: 3, name: "Watch", price: "₹999" },
    { id: 4, name: "Headphones", price: "₹1999" }
  ];

  return (
    <div>
      <div
  style={{
    background: "#2874f0",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px"
  }}
>
  <h1>DriftCart</h1>
  <p>Your Shopping Destination</p>
<p>🛒 Cart: {cartCount}</p>
</div>
<input
  type="text"
  placeholder="🔍 Search products..."
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  }}
/>
      <p>Welcome to my shopping app</p>

      {products.map((product) => (
        <div
  key={product.id}
  style={{
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px"
  }}
>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
  onClick={() => setCartCount(cartCount + 1)}
  style={{
    background: "#2874f0",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px"
  }}
>
  Add to Cart
</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
