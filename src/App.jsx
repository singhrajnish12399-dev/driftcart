import React, { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  const [tempName, setTempName] = useState("");

  const [page, setPage] = useState("home");

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  const banners = [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      category: "Fashion",
      name: "Premium T-Shirt",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 2,
      category: "Fashion",
      name: "Running Shoes",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 3,
      category: "Electronics",
      name: "Smart Watch",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
    },
    {
      id: 4,
      category: "Electronics",
      name: "Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 5,
      category: "Electronics",
      name: "Laptop",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 6,
      category: "Mobiles",
      name: "Mobile Phone",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 7,
      category: "Beauty",
      name: "Lipstick",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
    },
    {
      id: 8,
      category: "Beauty",
      name: "Makeup Kit",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    }
  ];

  const addCart = (item) => {
    if (cart.some((p) => p.id === item.id)) return;

    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const addWishlist = (item) => {
    if (wishlist.some((p) => p.id === item.id)) return;

    const updated = [...wishlist, item];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="login-box">
          <h1>🛒 DriftCart</h1>
          <p>India's Smart Shopping App</p>

          <input
            type="text"
            placeholder="Enter your name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />

          <button
            onClick={() => {
              if (tempName.trim()) {
                setName(tempName);
                setLoggedIn(true);
                localStorage.setItem("name", tempName);
                localStorage.setItem("loggedIn", "true");
              }
            }}
          >
            Login / Signup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">

      {/* PRODUCT DETAILS PAGE */}
      {selectedProduct && (
        <div className="page-box">
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              marginBottom: "10px",
              padding: "8px 12px",
              border: "none",
              background: "#2874f0",
              color: "white",
              borderRadius: "6px",
            }}
          >
            ⬅ Back
          </button>

          <img
            src={selectedProduct.image}
            style={{ width: "100%", borderRadius: "12px" }}
            alt=""
          />

          <h2>{selectedProduct.name}</h2>
          <h3 style={{ color: "green" }}>₹{selectedProduct.price}</h3>
          <p>Category: {selectedProduct.category}</p>

          <button
            onClick={() => addCart(selectedProduct)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              background: "#2874f0",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Add to Cart
          </button>

          <button
            onClick={() => addWishlist(selectedProduct)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              background: "#ff4d6d",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            ❤️ Add to Wishlist
          </button>
        </div>
      )}

      {/* HOME */}
      {page === "home" && !selectedProduct && (
        <>
          <div className="header">
            <div className="top-header">
              <div className="menu-logo">
                <div className="menu-icon">☰</div>
                <div>
                  <h2>🛒 DriftCart</h2>
                  <p>Your Shopping Destination</p>
                </div>
              </div>

              <div className="header-icons">
                <div onClick={() => setPage("wishlist")}>
                  ❤️ <span>{wishlist.length}</span>
                </div>
                <div onClick={() => setPage("cart")}>
                  🛒 <span>{cart.length}</span>
                </div>
              </div>
            </div>

            <input
              className="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="categories">
            {["All", "Mobiles", "Fashion", "Electronics", "Beauty"].map(
              (cat) => (
                <div
                  key={cat}
                  className={
                    selectedCategory === cat ? "active-category" : ""
                  }
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </div>
              )
            )}
          </div>

          <h3 className="section-title">Trending Products</h3>

          <div className="product-grid">
            {products
              .filter(
                (p) =>
                  p.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) &&
                  (selectedCategory === "All" ||
                    p.category === selectedCategory)
              )
              .map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                >
                  <img src={product.image} alt="" />
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>

                  <button onClick={() => addCart(product)}>
                    Add to Cart
                  </button>

                  <button
                    className="wish-btn"
                    onClick={() => addWishlist(product)}
                  >
                    ❤️ Wishlist
                  </button>
                </div>
              ))}
          </div>
        </>
      )}

      {/* CART */}
      {page === "cart" && (
        <div className="page-box">
          <h2>🛒 My Cart</h2>

          {cart.map((item, index) => (
            <div className="list-item" key={index}>
              <img src={item.image} alt="" />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <h3>
            Total: ₹
            {cart.reduce((t, i) => t + i.price, 0)}
          </h3>
        </div>
      )}

      {/* WISHLIST */}
      {page === "wishlist" && (
        <div className="page-box">
          <h2>❤️ Wishlist</h2>

          {wishlist.map((item, index) => (
            <div className="list-item" key={index}>
              <img src={item.image} alt="" />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ACCOUNT */}
      {page === "account" && (
        <div className="page-box">
          <h2>👤 Account</h2>

          <div className="account-card">
            <h3>{name}</h3>
            <p>Welcome to DriftCart</p>

            <button
              className="logout-btn"
              onClick={() => {
                localStorage.clear();
                setLoggedIn(false);
                setName("");
                setCart([]);
                setWishlist([]);
                setPage("home");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        <button onClick={() => setPage("home")}>🏠 Home</button>
        <button onClick={() => setPage("wishlist")}>
          ❤️ {wishlist.length}
        </button>
        <button onClick={() => setPage("cart")}>
          🛒 {cart.length}
        </button>
        <button onClick={() => setPage("account")}>
          👤 Account
        </button>
      </div>
    </div>
  );
}

export default App;