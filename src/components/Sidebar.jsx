import logo from "/images/logo.png";

function Sidebar({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center gap-4 w-1/5 py-8 bg-white">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={logo} alt="logo" />
          <h2 className="text-primary-600 text-2xl font-Audiowide">
            Tajdid Store
          </h2>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="w-4/5 bg-gray-100">{children}</div>
    </div>
  );
}

export default Sidebar;
