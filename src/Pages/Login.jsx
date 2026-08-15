import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    console.log("Login Data:", {
      email,
      password,
    });

    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#070B18] via-red-950 to-[#070B18] px-5">
      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-4xl shadow-lg shadow-red-500/30">
          🩸
        </div>
        <h1 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Login to your Blood Donation account
        </p>

        
        <form onSubmit={handleLogin} className="mt-8">
          
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-white">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          
          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-gradient-to-r from-red-500 to-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:scale-[1.02] hover:from-red-600 hover:to-orange-600 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

       
        <p className="mt-6 text-center text-gray-400">
          Don't have an account !{" "}
          <a
            href="/register"
            className="font-semibold text-red-400 transition hover:text-red-300"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
