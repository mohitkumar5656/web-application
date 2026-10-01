import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [settingData, setsettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMenu, setUserMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const name = localStorage.getItem("name");
      setUser(name);
    };

    updateUser();

    window.addEventListener("login", updateUser);

    return () => {
      window.removeEventListener("login", updateUser);
    };
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setUserMenu(false);
    navigate("/login");
  };

  return (
    <div className="mt-20">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          
          <h1 className="text-white text-2xl font-bold">
            {settingData.siteName}
          </h1>

          
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/feature">Features</Link>
            <Link to="/contactus">Contact Us</Link>
          </nav>

          
          <div className="hidden md:block relative">

            {user ? (
              <div className="relative">

                {/* Username Button */}
                <button
                  onClick={() => setUserMenu(!userMenu)}
                  className="flex items-center gap-2 text-white font-semibold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                >
                  👤 Hi, {user}
                  <span>{userMenu ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown */}
                {userMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden">

                    <div className="px-4 py-3 border-b bg-gray-50">
                      <p className="text-gray-500 text-sm">
                        Logged in as
                      </p>

                      <p className="font-semibold text-gray-800">
                        {user}
                      </p>
                    </div>

                    {/* Cart */}
                    <button
                      onClick={() => {
                        navigate("/cart");
                        setUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-700"
                    >
                      🛒 Cart
                    </button>

                    {/* Wishlist */}
                    <button
                      onClick={() => {
                        navigate("/wishlist");
                        setUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-700"
                    >
                      ❤️ Wishlist
                    </button>

                    {/* Logout */}
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 border-t"
                    >
                      🚪 Logout
                    </button>

                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-blue-600 text-white flex flex-col px-4 py-4 gap-3">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/feature">Features</Link>
            <Link to="/contactus">Contact Us</Link>

            {user ? (
              <>
                <div className="border-t border-blue-400 pt-3">
                  <p className="font-semibold mb-2">
                    👤 Hi, {user}
                  </p>

                  <button
                    onClick={() => navigate("/cart")}
                    className="block py-2"
                  >
                    🛒 Cart
                  </button>

                  <button
                    onClick={() => navigate("/wishlist")}
                    className="block py-2"
                  >
                    ❤️ Wishlist
                  </button>

                  <button
                    onClick={logout}
                    className="bg-red-500 px-3 py-2 rounded-lg mt-2"
                  >
                    🚪 Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
              >
                Login
              </NavLink>
            )}

          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;