import React, { useState, useRef, useEffect } from 'react';
import { FaBox, FaImage, FaSearch } from 'react-icons/fa'; // FaSearch ikonu eklendi

const MakesCommentsTab = ({ product }) => {
  const [visibleMakes, setVisibleMakes] = useState(8); // Başlangıçta 8 ürün gösterilecek
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown menüsünün durumu
  const dropdownRef = useRef(null); // Dropdown'a dış tıklama için referans

  const showMore = () => setVisibleMakes(visibleMakes + 8); // 8 tane daha ekle

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="text-white p-4 lg:px-24 max-w-screen-lg mx-auto"> {/* Geniş ekranlarda ortalamak ve boşluk eklemek için */}
      {/* Makes Section Başlığı */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <h2 className="text-lg font-semibold mb-4">
          Makes ({product.makesData.length} photos of {product.makes} makes)
        </h2>
        <button className="px-4 py-2 border text-white mb-4 flex items-center space-x-2 hover:border-orange-500 hover:text-orange-500">
          <FaBox />
          <span>ADD MAKE</span>
        </button>
      </div>
      <hr className="border-gray-500 mb-4" />
      {/* Makes İçerikleri */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
        {product.makesData.slice(0, visibleMakes - 1).map((make, index) => (
          <div key={index} className="relative">
            <img
              src={make.imageUrl}
              alt={`${make.user.name}'s creation`}
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="absolute top-1 left-1 flex flex-col items-center">
              <img
                src={make.user.avatar}
                alt={`${make.user.name} avatar`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="bg-blue-600 text-white px-2 py-1 rounded-md -mt-2 text-xs">
                {make.user.level}
              </div>
            </div>
          </div>
        ))}

        {/* Show More Butonu 8. görselin yerine */}
        {visibleMakes < product.makesData.length && (
          <div className="flex justify-center items-center">
            <button onClick={showMore} className="text-orange-500 hover:underline">
              show more
            </button>
          </div>
        )}
      </div>

      {/* Yorum Alanı */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <div className="p-4">
          <textarea
            className="w-full bg-transparent border border-gray-600 text-white p-2 mb-4 focus:outline-none"
            placeholder="Add comment..."
            rows="3"
          />
          <div className="flex justify-between items-center">
            <button className="flex items-center text-white hover:text-orange-500">
              <FaImage className="mr-2" />
              Attach picture
            </button>
            <button className="px-4 py-2 bg-[#4c4c4e] text-gray-800" disabled>
              POST
            </button>
          </div>
        </div>

        {/* Search Bar ve Makes Only ve Dropdown menü hizalaması */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search ve Makes Only */}
          <div className="flex flex-col space-y-2">
            {/* Search Kutusu */}
            <div className="flex items-center bg-[#121212] text-white p-2 border border-gray-600 focus-within:outline-none">
              <input
                type="text"
                className="bg-[#121212] text-white focus:outline-none"
                placeholder="Search"
              />
              <FaSearch className="ml-2 text-gray-600" />
            </div>

            {/* Makes Only Checkbox */}
            <div className="flex items-center mt-2">
              <input type="checkbox" id="makes-only" className="mr-1" />
              <label htmlFor="makes-only" className="text-white">Makes only</label>
            </div>
          </div>

          {/* Dropdown Menü */}
          <div className="relative z-50">
            <div
              className="flex items-center space-x-2 cursor-pointer border border-gray-600 rounded-lg px-4 py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-white">Newest post</span>
              <button className="text-white">⌄</button>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#1c1e21] border border-gray-600 w-48 z-50 md:w-48 w-full"> {/* Mobilde tam genişlik */}
                {['Newest post', 'Latest active', 'Most replies', 'Likes'].map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 text-white hover:bg-orange-800 cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MakesCommentsTab;
