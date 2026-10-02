
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const getInputData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    // Error remove while typing
    setError({
      ...error,
      [name]: "",
    });
  };

  const postData = (e) => {
    e.preventDefault();

    let newError = {};

    // Required validation
    if (!data.name.trim()) {
      newError.name = "Please enter your name";
    }

    if (!data.username.trim()) {
      newError.username = "Please enter username";
    }

    if (!data.email.trim()) {
      newError.email = "Please enter email";
    }

    if (!data.phone.trim()) {
      newError.phone = "Please enter phone number";
    }

    if (!data.password) {
      newError.password = "Please enter password";
    }

    if (!data.cpassword) {
      newError.cpassword = "Please confirm password";
    }

    // Password match
    if (
      data.password &&
      data.cpassword &&
      data.password !== data.cpassword
    ) {
      newError.cpassword = "Passwords do not match";
    }

    // Stop if validation error
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check existing username/email
    const exist = users.find(
      (u) =>
        u.username === data.username ||
        u.email === data.email
    );

    if (exist) {
      setError({
        username:
          exist.username === data.username
            ? "Username already exists"
            : "",
        email:
          exist.email === data.email
            ? "Email already exists"
            : "",
      });
      return;
    }

    // Save user
    const newUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Signup successful ✅");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-5 sm:p-6 md:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <form
          onSubmit={postData}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.name && (
              <p className="text-red-500 text-sm mt-1">
                {error.name}
              </p>
            )}
          </div>

          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.username && (
              <p className="text-red-500 text-sm mt-1">
                {error.username}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={data.phone}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.phone && (
              <p className="text-red-500 text-sm mt-1">
                {error.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.email && (
              <p className="text-red-500 text-sm mt-1">
                {error.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.password && (
              <p className="text-red-500 text-sm mt-1">
                {error.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={data.cpassword}
              onChange={getInputData}
              className="w-full border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error.cpassword && (
              <p className="text-red-500 text-sm mt-1">
                {error.cpassword}
              </p>
            )}
          </div>

          {/* Signup Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition"
            >
              Signup
            </button>
          </div>

        </form>

        <p className="text-center mt-5 text-sm sm:text-base">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;

