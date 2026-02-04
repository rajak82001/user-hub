const MobileWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="bg-gray-50 rounded-xl shadow-lg p-6"
        style={{ maxWidth: "350px", height: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;
