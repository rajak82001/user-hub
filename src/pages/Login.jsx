import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="w-3/4 mb-6">
        <h2 className="text-3xl font-bold mb-3">Signin to your PopX account</h2>
        <p className=" text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-5">
          {/* Email Field - floating label */}
          <div className="relative">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter email address"
            />
            <label
              htmlFor="email-address"
              className="absolute -top-2 left-3  bg-white px-1 text-xs font-medium text-purple-600"
            >
              Email Address
            </label>
          </div>

          {/* Password Field - floating label */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter password"
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600"
            >
              Password
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={() => navigate("/account")}
            className="group relative w-full flex justify-center 
                         py-3 px-4 border border-transparent 
                         text-sm font-medium rounded-lg text-white 
                         bg-neutral-300 hover:bg-neutral-400 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-neutral-400 transition duration-150 cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </MobileWrapper>
  );
};

export default Login;
