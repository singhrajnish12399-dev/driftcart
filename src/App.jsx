import React from "react";
function App() {
const [cartCount, setCartCount] = React.useState(0);
const [cartItems, setCartItems] = React.useState([]);
const [search, setSearch] = React.useState("");
const [isLoggedIn, setIsLoggedIn] = React.useState(false);
const [username, setUsername] = React.useState("");
  const products = [
    { id: 1, name: "T-Shirt", price: "₹499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { id: 2, name: "Shoes", price: "₹1499", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 3, name: "Watch", price: "₹999", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
    { id: 4, name: "Headphones", price: "₹1999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" }
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
  <h1>🛒 DriftCart</h1>
<p style={{ marginTop: "-10px" }}>
  Shop Smart, Shop Fast
</p>
  <p>Your Shopping Destination</p>
<p>🛒 Cart: {cartCount}</p>
{cartItems.map((item, index) => (
  <p key={index}>
    🛒 {item.name} - {item.price}
  </p>
))}
</div>
<input
  type="text"
  placeholder="🔍 Search products..."
value={search}
onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  }}
/>
<div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  }}
>
  <button>Fashion</button>
  <button>Electronics</button>
  <button>Watches</button>
  <button>Shoes</button>
</div>
      <p>Welcome to my shopping app</p>

      {products
  .filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (
        <div
  key={product.id}
  style={{
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px"
  }}
>
<img
  src={product.image}
  alt={product.name}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px"
  }}
/>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
  onClick={() => {
  setCartCount(cartCount + 1);
  setCartItems([...cartItems, product]);
}}
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

<div
  style={{
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "white",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-around",
    padding: "12px"
  }}
>
  <span>🏠 Home</span>
  <span>❤️ Wishlist</span>
  <span>🛒 Cart</span>
  <span>👤 Account</span>
</div>
</div>
  );
}

export default App;
