const Navbar = () => {
  return (
    <div className="bg-[#1c1e21] h-16 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Printables Logo" className="h-8" />
        {/* Printables yazısını sadece büyük ekranlarda göster */}
        <span className="hidden lg:block text-white text-3xl font-bold">
          Printables
        </span>
      </div>

      {/* +Create Butonu */}
      <button className="flex items-center space-x-2 px-4 py-2 border border-white rounded-md text-white text-sm transition duration-300 hover:border-orange-500 hover:text-orange-500">
        <span>+ Create</span>
      </button>
    </div>
  );
};

export default Navbar;
