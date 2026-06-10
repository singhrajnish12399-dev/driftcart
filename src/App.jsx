import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Color Palette
const COLORS = {
  primary: "#1A73E8",
  secondary: "#0F4B96",
  accentRed: "#E74C3C",
  accentOrange: "#F39C12",
  background: "#F6F6F6",
  white: "#FFFFFF",
  gray: "#7F8C8D",
  text: "#333333",
};

// Simple Icon Components (to avoid library dependencies)
const Icons = {
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  ),
  Cart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
  ),
  HeaderCart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
  ),
  Heart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={COLORS.accentRed} stroke={COLORS.accentRed} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentOrange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  ),
  Account: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
};

const Header = () => (
  <div style={{ backgroundColor: COLORS.primary, padding: "10px 15px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Icons.Menu />
      <div>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "20px", color: COLORS.white }}>DriftCart</div>
        <div style={{ fontSize: "10px", color: "#B3D1FC" }}>Your Shopping Destination</div>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "15px", position: "relative" }}>
      <Icons.Heart />
      <div style={{ color: COLORS.white, position: "absolute", top: "-5px", right: "45px", backgroundColor: "white", borderRadius: "50%", padding: "2px 5px", fontSize: "10px", color: COLORS.primary }}>0</div>
      <div style={{ position: "relative" }}>
        <Icons.HeaderCart />
        <div style={{ color: COLORS.white, position: "absolute", top: "-5px", right: "-5px", backgroundColor: COLORS.accentRed, borderRadius: "50%", padding: "2px 5px", fontSize: "10px" }}>0</div>
      </div>
    </div>
  </div>
);

const SearchBar = () => (
  <div style={{ padding: "0 15px", marginTop: "80px" }}>
    <div style={{ display: "flex", alignItems: "center", backgroundColor: COLORS.white, borderRadius: "25px", padding: "10px 15px", border: "1px solid #E0E0E0" }}>
      <Icons.Search />
      <input type="text" placeholder="Search for products, brands and more..." style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", marginLeft: "10px", color: COLORS.gray }} />
    </div>
  </div>
);

const Banner = () => (
  <div style={{ padding: "15px", margin: "15px 0" }}>
    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" alt="Special Offer headphones" style={{ width: "100%", borderRadius: "15px", objectFit: "cover", maxHeight: "200px" }} />
  </div>
);

const Categories = () => {
  const categories = [
    { icon: "🔥", label: "All", active: true },
    { icon: "📱", label: "Mobiles", active: false },
    { icon: "👕", label: "Fashion", active: false },
    { icon: "⭐", label: "Best", active: false },
  ];
  return (
    <div style={{ display: "flex", gap: "10px", padding: "0 15px", overflowX: "auto", margin: "15px 0" }}>
      {categories.map((cat, i) => (
        <button key={i} style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: cat.active ? COLORS.primary : COLORS.white, color: cat.active ? COLORS.white : COLORS.text, border: "none", padding: "10px 20px", borderRadius: "25px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap", cursor: "pointer", boxShadow: "0px 2px 3px rgba(0,0,0,0.05)" }}>
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div style={{ backgroundColor: COLORS.white, borderRadius: "15px", padding: "15px", border: "1px solid #E0E0E0", flex: "1 1 calc(50% - 10px)", boxSizing: "border-box" }}>
    <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
    <h3 style={{ fontSize: "16px", margin: "10px 0 5px 0", color: COLORS.text }}>{product.name}</h3>
    <div style={{ color: "#27AE60", fontSize: "18px", fontWeight: "bold" }}>₹{product.price}</div>
    <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
      <button style={{ backgroundColor: COLORS.primary, color: COLORS.white, border: "none", flex: 1, padding: "10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>Add to Cart</button>
      <button style={{ backgroundColor: "#FFEBEB", color: COLORS.accentRed, border: "none", flex: 1, padding: "10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}><Icons.Heart size={14} fill="#FFEBEB"/> Wishlist</button>
    </div>
  </div>
);

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "0 15px", paddingBottom: "100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h2 style={{ fontSize: "18px", margin: 0, fontWeight: "600" }}>Trending Products</h2>
        <span style={{ color: COLORS.primary, fontSize: "14px", fontWeight: "600" }}>View All</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const BottomNav = () => (
  <div style={{ backgroundColor: COLORS.white, display: "flex", justifyContent: "space-between", position: "fixed", bottom: 0, left: 0, right: 0, padding: "10px 20px", borderRadius: "15px 15px 0 0", boxShadow: "0px -2px 10px rgba(0,0,0,0.05)", zIndex: 999 }}>
    {[
      { icon: <Icons.Home />, label: "Home" },
      { icon: <Icons.Heart />, label: "0" },
      { icon: <Icons.Cart />, label: "0" },
      { icon: <Icons.Account />, label: "Account" },
    ].map((item, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
        {item.icon}
        <span style={{ fontSize: "14px", color: i === 0 ? COLORS.accentOrange : (i === 3 ? COLORS.primary : COLORS.text), fontWeight: "600" }}>{item.label}</span>
      </div>
    ))}
  </div>
);

function App() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header />
      <SearchBar />
      <Banner />
      <Categories />
      <ProductsSection />
      <BottomNav />
    </div>
  );
}

export default App;
