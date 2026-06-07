import React, { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");

  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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
    }
  ];

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const addWishlist = (item) => {
    setWishlist([...wishlist, item]);
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

      <div className="header">
        <h2>🛒 DriftCart</h2>

        <input
          className="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {page === "home" && (
        <>
          <div className="banner">
            <img
              src={banners[currentBanner]}
              alt="banner"
            />
          </div>

          <div className="categories">
  <div onClick={() => setSelectedCategory("All")}>🔥 All</div>
  <div onClick={() => setSelectedCategory("Mobiles")}>📱 Mobiles</div>
  <div onClick={() => setSelectedCategory("Fashion")}>👕 Fashion</div>
  <div onClick={() => setSelectedCategory("Electronics")}>💻 Electronics</div>
</div>

          <h3 className="section-title">
            Trending Products
          </h3>

          <div className="product-grid">
            {products
              .filter(
  (p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" ||
      p.category === selectedCategory)
)
              )
              .map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h4>{product.name}</h4>

                  <p>₹{product.price}</p>

                  <button
                    onClick={() =>
                      addCart(product)
                    }
                  >
                    Add to Cart
                  </button>

                  <button
                    className="wish-btn"
                    onClick={() =>
                      addWishlist(product)
                    }
                  >
                    ❤️ Wishlist
                  </button>
                </div>
              ))}
          </div>
        </>
      )}{page === "cart" && (
        <div className="page-box">
          <h2>🛒 My Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="list-item" key={index}>
                <img src={item.image} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {page === "wishlist" && (
        <div className="page-box">
          <h2>❤️ Wishlist</h2>

          {wishlist.length === 0 ? (
            <p>No wishlist items</p>
          ) : (
            wishlist.map((item, index) => (
              <div className="list-item" key={index}>
                <img src={item.image} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {page === "account" && (
        <div className="page-box">
          <h2>👤 Account</h2>

          <div className="account-card">
            <h3>{name}</h3>
            <p>Welcome to DriftCart</p>

            <p>
              Cart Items: <b>{cart.length}</b>
            </p>

            <p>
              Wishlist Items: <b>{wishlist.length}</b>
            </p>

            <button
              className="logout-btn"
              onClick={() => {
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

      <div className="bottom-nav">
        <button
          onClick={() => setPage("home")}
        >
          🏠 Home
        </button>

        <button
          onClick={() =>
            setPage("wishlist")
          }
        >
          ❤️ {wishlist.length}
        </button>

        <button
          onClick={() => setPage("cart")}
        >
          🛒 {cart.length}
        </button>

        <button
          onClick={() =>
            setPage("account")
          }
        >
          👤 Account
        </button>
      </div>
    </div>
  );
}

export default App;