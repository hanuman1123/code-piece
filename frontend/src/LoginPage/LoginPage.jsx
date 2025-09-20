import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const url = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email: userName,
        password: password,
      });

      const responseData = await url;
      const access_token = responseData.data.access_token;
      localStorage.setItem("access_token", access_token);

      if (access_token) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Login card */}
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm text-center">
        <img
          src="https://kite.zerodha.com/static/images/kite-logo.svg"
          alt="kite logo"
          className="w-14 mx-auto mb-6"
        />

        <h1 className="text-xl font-semibold mb-6">Login to Kite</h1>

        <div className="space-y-6 text-left">
          {/* Floating label for Username */}
          <div className="relative">
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Phone number or User ID"
            />
            <label
              htmlFor="username"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Phone number or User ID
            </label>
          </div>

          {/* Floating label for Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Password
            </label>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 mt-6 rounded-md font-medium transition"
        >
          Login
        </button>

        <p className="text-sm text-blue-600 mt-3 cursor-pointer hover:underline">
          Forgot user ID or password?
        </p>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-gray-500 text-sm max-w-lg px-6">
        <div className="flex justify-center gap-4 mb-4">
          <img
            src="https://kite.zerodha.com/static/images/android.svg"
            alt="android"
            className="w-6"
          />
          <img
            src="https://kite.zerodha.com/static/images/apple.svg"
            alt="apple"
            className="w-6"
          />
        </div>

        <img
          src="https://kite.zerodha.com/static/images/zerodha-logo.svg"
          alt="zerodha"
          className="mx-auto w-28 mb-2"
        />

        <h5 className="mb-1">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Signup now!
          </span>
        </h5>

        <p className="text-xs leading-relaxed">
          Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.
          INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Smart Online
          Dispute Resolution | SEBI SCORES
        </p>

        <p className="mt-2 text-xs">v3.0.0</p>
      </div>
    </div>
  );
}

export default LoginPage;
