import MobileWrapper from "../components/MobileWrapper";

const Account = () => {
  return (
    <MobileWrapper>
      <h2 className="font-semibold text-xl bg-white mb-4">Account Settings</h2>
     <div className="bg-gray-50 border-b border-dotted pb-5">
      <div className="flex items-center gap-4  pb-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-medium">Marry Doe</p>
          <p className="text-sm text-gray-700">marry@gmail.com</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-4 ">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
      </div>
    </MobileWrapper>
  );
};

export default Account;
