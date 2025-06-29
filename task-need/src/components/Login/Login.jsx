import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy login handler — replace with real logic
  const handleLogin = (e) => {
    e.preventDefault();

    // Example: pretend login is successful
    if (email && password) {
      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-20">
      {/* Login Form */}
      <div className="w-4/5 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 ">লগিন করুন</h1>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              ফোন নম্বর বা ইমেইলঃ
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md bg-transparent focus:ring focus:ring-yellow-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              পাসওয়ার্ডঃ
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="w-full p-2 border bg-transparent rounded-md focus:ring focus:ring-yellow-300"
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              type="submit"
              className="text-xs btn btn-primary hover:underline"
            >
              লগিন করুন
            </button>

            <button
              type="button"
              className="text-xs text-gray-500 hover:underline"
            >
              পাসওয়ার্ড <span className="text-blue-400">ভুলে গিয়েছেন?</span>
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-gray-500 text-sm ">অথবা</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="text-xs dark:text-gray-300">
          কোনো একাউন্ট না থাকলে{" "}
          <Link to="/register" className="text-blue-400 px-1 hover:underline">
            এখন থেকে
          </Link>
          নতুন এ্যাকাউন্ট তৈরি করতে পারেন।
        </div>
      </div>
    </div>
  );
};

export default Login;