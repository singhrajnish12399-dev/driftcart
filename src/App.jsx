function App() {
  const products = [
    { id: 1, name: "T-Shirt", price: "₹499" },
    { id: 2, name: "Shoes", price: "₹1499" },
    { id: 3, name: "Watch", price: "₹999" },
    { id: 4, name: "Headphones", price: "₹1999" }
  ];

  return (
    <div>
      <h1>DriftCart</h1>
      <p>Welcome to my shopping app</p>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
