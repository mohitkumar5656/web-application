
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getInputData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    // Error remove while typing
    setError("");
  };

  const postData = (e) => {
    e.preventDefault();

   
    if (!data.username.trim()) {
      setError("Please enter username or email");
      return;
    }

    if (!data.password) {
      setError("Please enter password");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by username or email
    const item = users.find(
      (u) =>
        u.username === data.username.trim() ||
        u.email === data.username.trim()
    );

    // Check username/email and password
    if (!item) {
      setError("Username or Email not found");
      return;
    }

    if (item.password !== data.password) {
      setError("Incorrect password");
      return;
    }

    // Login success
    localStorage.setItem("login", "true");
    localStorage.setItem("name", item.name);

    window.dispatchEvent(new Event("login"));

    alert("Login Successful ✅");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 sm:p-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={postData} className="space-y-4">

          {/* Username / Email */}
          <div>
            <label className="block mb-1 font-medium">
              Username / Email
            </label>

            <input
              type="text"
              name="username"
              value={data.username}
              onChange={getInputData}
              placeholder="Enter username or email"
              className={`w-full border p-2.5 rounded-lg focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={data.password}
              onChange={getInputData}
              placeholder="Enter password"
              className={`w-full border p-2.5 rounded-lg focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2.5 rounded-lg shadow-md hover:shadow-lg transition font-semibold"
          >
            Login
          </button>

        </form>

        
        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4 text-sm text-center sm:text-left">

          <Link
            to="#"
            className="text-blue-500 hover:underline"
          >
            Forgot Password
          </Link>

          <Link
            to="/signup"
            className="text-blue-500 hover:underline"
          >
            Create Account
          </Link>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;

