import React, { useState, useRef, useEffect } from 'react';
import { FaHeart, FaStar, FaBookmark, FaCheckCircle, FaDownload, FaPlus, FaSearch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { productData } from '../data/productData'; // Remixes verilerini çekiyoruz

const RemixesTab = () => {
  const remixes = productData[0].remixes; // productData'dan remixes verilerini alıyoruz
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Bir sayfada gösterilecek remix sayısı azaltıldı, daha geniş kartlar için
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown menüsünün durumu
  const dropdownRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < remixes.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Dropdown dışına tıklayınca menüyü kapat
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
    <div className="bg-[#1c1e21] p-10 min-h-screen max-w-screen-xl mx-auto"> {/* max-w-screen-xl ile genişletildi */}
      {/* Remixes Başlık, Add remix, Search ve Dropdown hizalama */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0"> {/* Mobilde dikey, md'de yatay hizalama */}
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-bold text-white">Remixes</h2>
          <button className="flex items-center px-2 py-1 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-gray-800">
            <FaPlus className="mr-2" />
            Add remix
          </button>
        </div>

        {/* Search ve Dropdown'u mobilde alt alta, md'de yatay hizalama */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto"> {/* Mobilde dikey hizalama */}
          {/* Search Kutusu */}
          <div className="flex items-center bg-[#121212] text-white p-2 border border-gray-600 w-full md:w-auto">
            <input
              type="text"
              className="bg-[#121212] text-white w-full focus:outline-none"
              placeholder="Search by model name"
            />
            <FaSearch className="ml-2 text-gray-600" />
          </div>

          {/* Dropdown Menü */}
          <div className="relative w-full md:w-auto" ref={dropdownRef}> {/* Mobilde genişlik full */}
            <div
              className="flex items-center space-x-2 cursor-pointer border border-gray-600 rounded-lg px-4 py-2 w-full md:w-auto"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-white">New uploads</span>
              <button className="text-white">⌄</button>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#1c1e21] border border-gray-600 rounded-lg w-full md:w-48 z-10"> {/* Mobilde genişliği tam, md'de dar */}
                {['New uploads', 'Downloads', 'Makes', 'Likes', 'Views', 'Ratings'].map((option) => (
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

      {/* Kartlar */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* lg:grid-cols-3 yaparak daha geniş kartlar elde ettik */}
          {remixes.slice(currentIndex, currentIndex + itemsPerPage).map((remix) => (
            <div key={remix.id} className="bg-[#1c1e21] border border-[#383a3c] rounded-none overflow-hidden shadow-lg">
              
              {/* Satıcı Bilgisi */}
              <div className="flex items-center p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={remix.seller.avatar}
                    alt={remix.seller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-md -mt-2 text-sm">
                    {remix.seller.level}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white flex items-center hover:text-[#d15836] cursor-pointer">
                    {remix.seller.name}
                    {remix.seller.verified && (
                      <FaCheckCircle className="ml-2 text-blue-500" />
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm cursor-pointer">{remix.seller.username}</p>
                </div>
              </div>

              {/* Ürün Görseli */}
              <div className="relative">
                <img
                  src={remix.remixImage}
                  alt={remix.productName}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Ürün Bilgisi */}
              <div className="p-4">
                <h4 className="text-xl font-bold text-white mb-1 hover:text-[#d15836] cursor-pointer">
                  {remix.productName}
                </h4>
                <hr className="border-gray-600 mb-4" />

                {/* Beğeni, Yıldız, Kaydetme */}
                <div className="flex justify-between items-center text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FaHeart className="hover:text-orange-500 cursor-pointer" />
                    <span>{remix.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar className="hover:text-yellow-500 cursor-pointer" />
                    <span>{remix.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaDownload className="hover:text-orange-500 cursor-pointer" />
                    <span>{remix.downloads}</span>
                  </div>
                  <div className="hover:text-orange-500 cursor-pointer">
                    <FaBookmark />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sol ve Sağ Oklar */}
        <div className="hidden lg:block">
          {/* Sol Ok */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836]"
            >
              <IoIosArrowBack size={24} />
            </button>
          )}

          {/* Sağ Ok */}
          {currentIndex < remixes.length - itemsPerPage && (
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836]"
            >
              <IoIosArrowForward size={24} />
            </button>
          )}
        </div>
      </div>

      {/* All items loaded yazısı */}
      <div className="text-center text-gray-400 mt-6">All items loaded</div>
    </div>
  );
};

export default RemixesTab;
