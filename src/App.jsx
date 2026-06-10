import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Jo file aapne banayi thi
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Stars ke liye icons

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Firebase Firestore se real products fetch karna
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 2. 'Buy Now' par Razorpay Checkout kholna
  const handleBuyNow = (product) => {
    const options = {
      key: "YOUR_RAZORPAY_TEST_KEY_ID", // ⚠️ Isko apne Razorpay Dashboard wale Key ID se replace kar lena
      amount: product.price * 100, // Razorpay paise me amount leta hai (₹499 = 49900 paise)
      currency: "INR",
      name: "DriftCart",
      description: `Payment for ${product.name}`,
      handler: function (response) {
        // Payment successful hone par ye chalega
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test User",
        email: "test@driftcart.com",
        contact: "9999999999"
      },
      theme: {
        color: "#2563EB" // DriftCart ka blue color
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // 3. Star Rating dikhane ke liye helper function
  const RenderStars = ({ rating }) => {
    const stars = [];
    const productRating = rating || 4; // Agar database me rating na ho toh default 4 star dikhega
    for (let i = 1; i <= 5; i++) {
      if (i <= productRating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= productRating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
  };

  if (loading) {
    return <div className="text-center mt-20 font-bold text-xl text-blue-600">DriftCart Products Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Top Navbar */}
      <div className="bg-blue-600 p-4 text-white font-bold text-center text-xl shadow-md">
        DriftCart
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Trending Products</h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-3 rounded-xl bg-white shadow-sm flex flex-col justify-between">
              <div>
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="font-bold mt-2 text-sm text-gray-800 line-clamp-1">{product.name}</h3>
                
                {/* Rating Component */}
                <div className="my-1 flex items-center gap-1.5">
                  <RenderStars rating={product.rating} />
                  <span className="text-xs text-gray-500">({product.rating || 4})</span>
                </div>
              </div>

              <div>
                <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
                
                {/* Buy Now Button */}
                <button 
                  onClick={() => handleBuyNow(product)}
                  className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg font-medium active:scale-95 transition-all text-sm shadow-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   );
}

export default App;