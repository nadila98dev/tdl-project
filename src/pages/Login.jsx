import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to E-Library
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block font-semibold text-gray-700 mb-2"
              for="email"
            >
              Email Address
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-semibold text-gray-700 mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex justify-between items-center">
              <a className="text-gray-600 hover:text-gray-800" href="#">
                Forgot your password?
              </a>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleSignUp}
              >
                Register
              </button>
            </div>
          </div>
          <div className="mb-6">
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
