
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 499,
      originalPrice: 699,
      discount: 29,
      image: "/Image/a5.jpg",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      image: "/Image/h1.jfif",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: "/Image/a3.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 499,
      originalPrice: 799,
      discount: 38,
      image: "/Image/a8.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      image: "/Image/h3.jfif",
    },
    {
      id: 6,
      name: "Premium Laptop",
      price: 49999,
      originalPrice: 59999,
      discount: 17,
      image: "/Image/a1.jpg",
    },
  ];

  
  const handleAddToCart = (item) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = oldCart.find(
      (cartItem) => cartItem.id === item.id
    );

    let newCart;

    if (existingItem) {
      newCart = oldCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    } else {
      newCart = [
        ...oldCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(newCart));

    navigate("/cart");
  };

  
  const handleAddToWishlist = (item) => {
    const oldWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingItem = oldWishlist.find(
      (wishlistItem) => wishlistItem.id === item.id
    );

    let newWishlist;

    if (existingItem) {
      newWishlist = oldWishlist.map((wishlistItem) =>
        wishlistItem.id === item.id
          ? {
              ...wishlistItem,
              quantity: wishlistItem.quantity + 1,
            }
          : wishlistItem
      );
    } else {
      newWishlist = [
        ...oldWishlist,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(newWishlist)
    );

    navigate("/wishlist");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Shop Products
        </h1>

        <p className="text-gray-500 mt-2">
          Discover our latest products at amazing prices
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {products.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="relative">

              
              <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {item.discount}% OFF
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* Product Details */}
            <div className="p-4">

              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-500">
                  (4.5)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-3">

                <span className="text-2xl font-bold text-gray-900">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>

                <span className="text-gray-400 line-through">
                  ₹{item.originalPrice.toLocaleString("en-IN")}
                </span>

              </div>

              {/* You Save */}
              <p className="text-green-600 text-sm font-semibold mt-1">
                You save ₹
                {(item.originalPrice - item.price).toLocaleString("en-IN")}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">

                {/* Cart */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-blue-500 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  <i className="ri-shopping-cart-line mr-1"></i>
                 Add Cart
                </button>

                
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="flex-1 bg-pink-500 text-white py-2.5 rounded-lg font-semibold hover:bg-pink-600 transition"
                >
                  <i className="ri-heart-line mr-1"></i>
                  Add Wishlist
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ShopPage;

