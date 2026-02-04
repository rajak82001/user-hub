import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="flex flex-col justify-end h-full gap-4">
        <div className="w-3/4 mb-6">
          <h1 className="text-2xl font-bold">Welcome to PopX</h1>
          <p className="text-gray-500 semi-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button
          onClick={() => navigate("/register")}
          className="bg-primary text-white py-3 rounded-md font-medium bg-[#8a05fe] cursor-pointer"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="bg-purple-200 text-primary py-3 rounded-md font-medium cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </MobileWrapper>
  );
};

export default Welcome;
