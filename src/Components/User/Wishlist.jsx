
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  // Increase Quantity
  const increaseQuantity = (id) => {
    const updatedWishlist = wishlist.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const updatedWishlist = wishlist
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // Remove Wishlist Item
  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // Move To Cart
  const moveToCart = (item) => {
    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = oldCart.find(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = oldCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity + item.quantity,
            }
          : cartItem
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...item,
          quantity: item.quantity || 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Remove from wishlist
    const updatedWishlist = wishlist.filter(
      (wishlistItem) => wishlistItem.id !== item.id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    navigate("/cart");
  };

  // Total
  const total = wishlist.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // Empty Wishlist
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

        <div className="bg-white max-w-md w-full text-center p-10 rounded-2xl shadow-lg">

          <div className="text-6xl mb-5">
            ❤️
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Your Wishlist is Empty
          </h1>

          <p className="text-gray-500 mt-2">
            Save your favorite products here and buy them later.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">

        <div className="text-center">
  <div className="flex items-center justify-center gap-3">
   

    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
      My Wishlist
    </h1>
  </div>

  <p className="text-gray-500 mt-2">
    Your favorite products are saved here
  </p>


        </div>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Wishlist Products */}
        <div className="lg:col-span-2">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-5 mb-5"
            >

              <div className="flex flex-col sm:flex-row gap-5">

                {/* Image */}
                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-40 h-40 object-cover rounded-xl"
                  />

                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.discount}% OFF
                    </span>
                  )}

                </div>

                {/* Details */}
                <div className="flex-1">

                  <div className="flex justify-between">

                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Remove from wishlist"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>

                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">

                    <span className="text-yellow-400">
                      ★★★★★
                    </span>

                    <span className="text-sm text-gray-500">
                      (4.5)
                    </span>

                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-3">

                    <span className="text-xl font-bold text-blue-600">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>

                    {item.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ₹{item.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mt-5">

                    <span className="text-sm font-semibold text-gray-500">
                      Quantity:
                    </span>

                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 font-bold"
                      >
                        −
                      </button>

                      <span className="w-10 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 font-bold"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">

                    <button
                      onClick={() => moveToCart(item)}
                      className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      <i className="ri-shopping-cart-line mr-2"></i>
                      Add to Cart
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Summary */}
        <div>

          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-5">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Wishlist Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Products</span>
              <span>{wishlist.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Total Quantity</span>
              <span>
                {wishlist.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="border-t pt-4">

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-blue-600">
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

            {/* Go To Shop */}
            <button
              onClick={() => navigate("/shop")}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Continue Shopping
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              View Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Wishlist;

