import { FaHeart, FaStar, FaDownload, FaBookmark, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const models = [
  {
    id: 1,
    name: "ThePS1Addict",
    username: "@ThePS1Addict_1386694",
    level: 4,
    verified: true,
    productName: "Modded Top for MiSTer Pi case V2 Taki Udon Mega Pack version",
    productCategory: "Gadgets > Video Games",
    likes: 4,
    stars: 0,
    downloads: 15,
    productImage: '/images/nm_content1.png',
    sellerImage: "/images/nm_seller1.png",
  },
  {
    id: 2,
    name: "DMD",
    username: "@MichaelD_641885",
    level: 8,
    verified: false,
    productName: "Canon FD 35mm f2 rehouse kit",
    productCategory: "Gadgets > Photo & Video",
    likes: 0,
    stars: 0,
    downloads: 0,
    productImage: '/images/nm_content2.png',
    sellerImage: "/images/nm_seller2.png",
  },
  {
    id: 3,
    name: "AWSW",
    username: "@AWSW",
    level: 22,
    verified: false,
    productName: "Aqara Smart Lock U200 - Door Mounting Adapter",
    productCategory: "Household > Other House Equipment",
    likes: 0,
    stars: 0,
    downloads: 0,
    productImage: '/images/nm_content3.png',
    sellerImage: "/images/nm_seller3.png",
  },
  {
    id: 4,
    name: "toni_thesber",
    username: "@Toni_1408747",
    level: 15,
    verified: true,
    productName: "Christmas Tree vortex illusion v1.4 - single extruder",
    productCategory: "Seasonal designs > Winter & Christmas & New Year's",
    likes: 4,
    stars: 0,
    downloads: 34,
    productImage: '/images/nm_content4.png',
    sellerImage: "/images/nm_seller4.png",
  },
  {
    id: 5,
    name: "MekDrafter",
    username: "@KK_1254804",
    level: 15,
    verified: false,
    productName: "Placemat/Coaster TPU",
    productCategory: "Household > Kitchen",
    likes: 0,
    stars: 0,
    downloads: 0,
    productImage: '/images/nm_content5.png',
    sellerImage: "/images/nm_seller5.png",
  },
  {
    id: 6,
    name: "Baaalzy",
    username: "@Baaalzy",
    level: 17,
    verified: false,
    productName: "Holder for Kitchen table",
    productCategory: "Household > Kitchen",
    likes: 0,
    stars: 0,
    downloads: 0,
    productImage: '/images/nm_content6.png',
    sellerImage: "/images/nm_seller6.png",
  }
];

const NewestModels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < models.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#18191a] p-10 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-10">Newest Models</h2>
      
      <div className="relative">
        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.slice(currentIndex, currentIndex + itemsPerPage).map((model) => (
            <div
              key={model.id}
              className="bg-[#1c1e21] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Satıcı Bilgisi */}
              <div className="flex items-center p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={model.sellerImage}
                    alt={model.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {/* Level kısmı */}
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-md -mt-2 text-sm">
                    {model.level}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white flex items-center hover:text-[#d15836] cursor-pointer">
                    {model.name}
                    {model.verified && (
                      <FaCheckCircle className="ml-2 text-blue-500" />
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm cursor-pointer">{model.username}</p>
                </div>
              </div>

              {/* Ürün Görseli */}
              <div className="relative">
                <img
                  src={model.productImage}
                  alt={model.productName}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Ürün Bilgisi */}
              <div className="p-4">
                <h4 className="text-xl font-bold text-white mb-2 hover:text-[#d15836] cursor-pointer">
                  {model.productName}
                </h4>
                <p className="text-sm text-gray-400 mb-4 hover:underline cursor-pointer">
                  {model.productCategory}
                </p>
                <hr className="border-gray-600 mb-4" />

                {/* Etkileşimler */}
                <div className="flex justify-between items-center text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="hover:text-orange-500 cursor-pointer">
                      <FaHeart />
                    </div>
                    <span>{model.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaStar />
                    <span>{model.stars}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDownload />
                    <span>{model.downloads}</span>
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
          {currentIndex < models.length - itemsPerPage && (
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836]"
            >
              <IoIosArrowForward size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Explore Models Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#eb6f40] text-black px-6 py-3 rounded-md text-lg hover:bg-[#d15836]">
          EXPLORE MODELS
        </button>
      </div>
    </div>
  );
};

export default NewestModels;
