import { useState } from 'react';
import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5'; // React Icons import

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIconClick = () => {
    alert("Icon clicked!"); // İkon tıklanınca işlem
  };

  return (
    <div className="bg-[#18191a] h-12 flex items-center justify-between px-4 md:px-6 relative z-10">
      {/* Dil seçici */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-[#5b5c5c] text-sm focus:outline-none"
        >
          EN ▾
        </button>

        {isDropdownOpen && (
          <div
            className="absolute mt-2 bg-[#1c1e21] text-white rounded-md shadow-lg border border-[#777777] z-50"
          >
            <ul className="py-2">
              {[
                "Čeština",
                "Deutsch",
                "English",
                "Español",
                "Français",
                "Italiano",
                "Polski",
              ].map((language, index) => (
                <li key={language}>
                  <div className="px-4 py-2 hover:text-orange-500 cursor-pointer">
                    {language}
                  </div>
                  {index < 6 && (
                    <hr className="border-t border-[#3f4143] mx-4" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Arama Kutusu */}
      <div className="relative w-48 sm:w-60 md:w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#1c1e21] border-[#292b2d] text-white rounded-full px-4 py-1 pl-10 focus:outline-none border"
        />
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* İkon ve Login */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* İkon - Buton */}
        <button onClick={handleIconClick} className="w-8 h-8 sm:w-10 sm:h-10">
          <img
            src="/images/icon.png"
            alt="icon"
            className="w-full h-full rounded-full object-cover"
          />
        </button>

        {/* Login Butonu - Yuvarlak İkon ile */}
        <button className="text-white text-sm flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center">
            <IoPersonOutline className="text-base sm:text-xl text-white" />
          </div>
          <span className="hidden sm:inline">Login</span> {/* Mobilde gizli */}
        </button>
      </div>
    </div>
  );
};

export default Search;
