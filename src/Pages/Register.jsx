import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !bloodGroup || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Registration Data:", {
      name,
      email,
      phone,
      bloodGroup,
      password,
    });

    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#070B18] via-red-950 to-[#070B18] px-5 py-10 pt-40">
      <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-4xl shadow-lg shadow-red-500/30">
          🩸
        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Join our blood donation community
        </p>

        <form onSubmit={handleRegister} className="mt-7">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          <div className="mt-4">
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

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-white">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-white">
              Blood Group
            </label>

            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-[#17101a] px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-white">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-500 to-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:scale-[1.02] hover:from-red-600 hover:to-orange-600 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account{" "}
          <a
            href="/login"
            className="font-semibold text-red-400 transition hover:text-red-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
