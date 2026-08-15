import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-red-100">
        <div className="text-center mb-7">
          <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-3xl">🩸</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Blood<span className="text-red-600">Connect</span>
          </h1>

          <p className="text-gray-500 text-sm mt-1">Save Blood. Save Lives.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>

          <p className="text-gray-500 text-sm mt-1">Join BloodConnect today</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div className="pt-1">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Register As
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  defaultChecked
                  className="w-4 h-4 accent-red-600"
                />

                <span className="text-gray-700">User</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  className="w-4 h-4 accent-red-600"
                />

                <span className="text-gray-700">Admin</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account Sir / Mam .{" "}
          <Link
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
