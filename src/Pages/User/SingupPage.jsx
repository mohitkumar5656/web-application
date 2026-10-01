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
    setData({ ...data, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();

    // Password match check
    if (data.password !== data.cpassword) {
      setError({ password: "Passwords do not match" });
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    
    const exist = users.find(
      (u) =>
        u.username === data.username ||
        u.email === data.email
    );

    if (exist) {
      setError({
        username: "Username already exists",
        email: "Email already exists",
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
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful ✅");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={postData} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          
          <input type="text" name="name" placeholder="Full Name"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

        
          <input type="text" name="username" placeholder="Username"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

          
          <input type="text" name="phone" placeholder="Phone"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

          
          <input type="email" name="email" placeholder="Email"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

          
          <input type="password" name="password" placeholder="Password"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

          
          <input type="password" name="cpassword" placeholder="Confirm Password"
            onChange={getInputData}
            className="border p-2 rounded-lg" />

          
          {error.password && (
            <p className="text-red-500 col-span-2">{error.password}</p>
          )}

            
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;