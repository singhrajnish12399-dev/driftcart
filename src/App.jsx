import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addCart = (item) => {
    if (!item) return;
    if (cart.some((p) => p.id === item.id)) return;
    setCart([...cart, item]);
  };

  const addWishlist = (item) => {
    if (!item) return;
    if (wishlist.some((p) => p.id === item.id)) return;
    setWishlist([...wishlist, item]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            wishlist={wishlist}
            addCart={addCart}
            addWishlist={addWishlist}
          />
        }
      />

      <Route path="/cart" element={<Cart cart={cart} />} />

      <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />

      <Route path="/account" element={<Account />} />

      <Route
        path="/product/:id"
        element={
          <ProductDetail
            addCart={addCart}
            addWishlist={addWishlist}
          />
        }
      />
    </Routes>
  );
}

export default App;