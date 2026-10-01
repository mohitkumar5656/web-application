
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Increase Quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove Product
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Delivery
  const delivery = subtotal >= 1000 ? 0 : 99;

  // Final Total
  const total = subtotal + delivery;

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">

          <div className="text-6xl mb-4">
            🛒
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-2">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        <p className="text-gray-500 mt-1">
          Review your products before checkout
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Cart Products */}
        <div className="lg:col-span-2">

          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-5 mb-5"
            >

              <div className="flex flex-col sm:flex-row gap-5">

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-40 h-40 object-cover rounded-xl"
                />

                {/* Product Details */}
                <div className="flex-1">

                  <div className="flex justify-between gap-3">

                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h2>

                      <div className="flex items-center gap-3 mt-2">

                        <span className="text-xl font-bold text-blue-600">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>

                        {item.originalPrice && (
                          <span className="text-gray-400 line-through">
                            ₹{item.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}

                      </div>

                    </div>

                    {/* Remove Icon */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Remove"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mt-6">

                    <span className="text-sm font-semibold text-gray-500">
                      Quantity:
                    </span>

                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 font-bold"
                      >
                        −
                      </button>

                      <span className="w-10 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 font-bold"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Product Total */}
                  <div className="mt-5">

                    <span className="text-sm text-gray-500">
                      Product Total
                    </span>

                    <p className="text-lg font-bold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">

          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-5">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Order Summary
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Subtotal</span>
              <span>
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Delivery */}
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Delivery</span>

              <span className="font-semibold">
                {delivery === 0 ? (
                  <span className="text-green-600">
                    FREE
                  </span>
                ) : (
                  `₹${delivery}`
                )}
              </span>

            </div>

            <div className="border-t pt-4">

              <div className="flex justify-between text-xl font-bold text-gray-800">

                <span>Total</span>

                <span className="text-blue-600">
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

            {/* Free Delivery */}
            {subtotal < 1000 && (
              <p className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg mt-5">
                Add ₹
                {(1000 - subtotal).toLocaleString("en-IN")}
                {" "}more to get FREE delivery.
              </p>
            )}

            {subtotal >= 1000 && (
              <p className="text-sm text-green-600 bg-green-50 p-3 rounded-lg mt-5">
                🎉 Congratulations! You got FREE delivery.
              </p>
            )}

            {/* Checkout */}
            <button
              onClick={() => navigate("/shop")}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
            >
              Proceed to Checkout
              <i className="ri-arrow-right-line ml-2"></i>
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => navigate("/shop")}
              className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Continue Shopping
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;

