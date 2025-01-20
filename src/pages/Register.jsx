import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex  items-center justify-center h-full bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div>
          <form>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="fist-name"
              >
                First Name
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="last-name"
              >
                Last Name
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
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
                for="phone-number"
              >
                Phone Number
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-number"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="student-id"
              >
                Student ID
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="student-id"
                type="text"
                placeholder="Enter your Student ID"
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
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                for="password-confirm"
              >
                Confirmation Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password-confirm"
                type="password"
                placeholder="Enter your confirmation password"
              />
            </div>
            <div className="flex justify-end items-center mb-3">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <div className="mb-6">
              <button
                onClick={handleRegister}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
