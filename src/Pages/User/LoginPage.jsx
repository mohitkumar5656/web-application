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
    setData({ ...data, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();

    // get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    
    const item = users.find(
      (u) =>
        u.username === data.username ||
        u.email === data.username
    );

    if (item && item.password === data.password) {
      // login success
      localStorage.setItem("login", true);
      localStorage.setItem("name", item.name);

      window.dispatchEvent(new Event("login"))

      alert("Login Successful ✅");
      navigate("/");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  ">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">

        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={postData} className="space-y-4">

          
          <div>
            <label className="block mb-1 font-medium">
              Username / Email
            </label>
            <input
              type="text"
              name="username"
              onChange={getInputData}
              placeholder="Enter username or email"
              className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
                error ? "border-red-500" : "border-gray-300"
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
              onChange={getInputData}
              placeholder="Enter password"
              className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
                error ? "border-red-500" : "border-gray-300"
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
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Login
          </button>
        </form>

      
        <div className="flex justify-between mt-4 text-sm">
          <Link to="#" className="text-blue-500 hover:underline">
            Forgot Password
          </Link>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;