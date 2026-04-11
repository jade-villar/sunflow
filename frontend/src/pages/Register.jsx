import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import AuthHeroPanel from "../components/Auth/AuthHeroPanel";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  // Register user
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({ name, email, password });
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="min-h-screen px-4 content-center md:pt-12 text-slate-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl md:border md:border-stone-200 md:shadow-around-md">
        {/* Left Panel */}
        <AuthHeroPanel />

        {/* Right Panel */}
        <div className="bg-white flex flex-col justify-center gap-6 px-6 py-10 md:px-10 md:py-10 rounded-3xl md:rounded-none md:rounded-r-3xl border border-stone-200 md:border-none shadow-around-md md:shadow-none">
          <div className="flex flex-col gap-1">
            <p className="uppercase text-yellow-500 tracking-wider text-xs font-bold">
              Get Started
            </p>
            <h2 className="text-3xl font-extrabold font-fraunces">
              Create your account
            </h2>
            <p className="text-xs text-stone-400 mt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-500 font-semibold hover:underline"
              >
                Log in here →
              </Link>
            </p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-stone-400 outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
                required
              />
            </div>

            {/* Enail */}
            <div>
              <label className="block text-xs mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-stone-400 outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-2">Password</label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-sm placeholder:text-stone-400 outline outline-stone-200 focus:bg-white focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-200 transition"
                  required
                />
                <div
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-2 bottom-1/2 translate-y-1/2 p-1 rounded-lg text-stone-400 hover:text-stone-800 active:text-stone-800 cursor-pointer transition"
                >
                  {isPasswordVisible ? (
                    <EyeSlashIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </div>
              </div>
            </div>

            {error && <div className="block text-xs text-red-500">{error}</div>}

            <button
              type="submit"
              className="space-x-2 mt-6 py-3.5 rounded-full text-sm font-semibold shadow-around-sm shadow-yellow-200 text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 cursor-pointer hover:-translate-y-px active:translate-y-0 transition"
            >
              <span>✦</span>
              <span>Create Account</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
