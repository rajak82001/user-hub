import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <h2 className="text-3xl font-bold w-3/4 mb-3">
        Create your PopX account
      </h2>

      <form className="mt-8 space-y-6">
        <div className="space-y-5">
          {/* Email Field - floating label */}
          <div className="relative">
            <input
              id="full-name"
              name="full-name"
              type="text"
              autoComplete="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter full name"
            />
            <label
              htmlFor="full-name"
              className="absolute -top-2 left-3  bg-white px-1 text-xs font-medium text-purple-600"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Phone number */}
          <div className="relative">
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter phone number"
            />
            <label
              htmlFor="phone-number"
              className="absolute -top-2 left-3  bg-white px-1 text-xs font-medium text-purple-600"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Email Field - floating label */}
          <div className="relative">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter email address"
            />
            <label
              htmlFor="email-address"
              className="absolute -top-2 left-3  bg-white px-1 text-xs font-medium text-purple-600"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Password Field - floating label */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter password"
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600"
            >
              Password <span className="text-red-500">*</span>
            </label>
          </div>

          {/* company name Field */}
          <div className="relative">
            <input
              id="company-name"
              name="company-name"
              type="text"
              autoComplete="current-password"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition duration-150"
              placeholder="Enter company name"
            />
            <label
              htmlFor="company-name"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600"
            >
              Company name 
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm mb-2">Are you an Agency?</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" />
              No
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
                         bg-[#7d05fe] hover:bg-[#7d05fe] 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-[#7d05fe] transition duration-150 cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </form>
    </MobileWrapper>
  );
};

export default Register;
