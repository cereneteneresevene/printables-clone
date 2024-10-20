import { useState } from "react";
import { FaHeart, FaStar, FaDownload, FaBookmark, FaCheckCircle } from "react-icons/fa";
import { IoIosBulb, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const models = [
  {
    id: 1,
    name: "3D Printy",
    username: "@3DPrinty",
    level: 26,
    verified: true,
    productName: "Mini Gargoyle - Sculptember Model #10",
    productCategory: "Seasonal designs > Autumn & Halloween",
    likes: 797,
    stars: 5,
    downloads: 3582,
    productImage: "/images/feature_models_1.png",
    sellerImage: "/images/seller_1.png",
  },
  {
    id: 2,
    name: "MakerSpace.Online",
    username: "@MakerSpaceOnl",
    level: 11,
    verified: false,
    productName: "PCB Circuit Board - Business Card Embosser Roller",
    productCategory: "Hobby & Makers > Other Ideas",
    likes: 1173,
    stars: 4.9,
    downloads: 1938,
    productImage: "/images/feature_models_2.png",
    sellerImage: "/images/seller_2.png",
  },
  {
    id: 3,
    name: "Prusa Research",
    username: "@Prusa3D",
    level: 20,
    verified: true,
    productName: "MK4S Nozzle Replacement Tool",
    productCategory: "3D Printers > Accessories",
    likes: 920,
    stars: 4.9,
    downloads: 2506,
    productImage: "/images/feature_models_3.png",
    sellerImage: "/images/seller_3.png",
  },
  {
    id: 4,
    name: "3DPrintBunny",
    username: "@3DPrintBunny",
    level: 20,
    verified: true,
    productName: "Pendulum Wave Toy with 3 Pendula Sets",
    productCategory: "Learning > Physics & Astronomy",
    likes: 808,
    stars: 4.6,
    downloads: 1406,
    productImage: "/images/feature_models_4.png",
    sellerImage: "/images/seller_4.png",
  },
  {
    id: 5,
    name: "New Model",
    username: "@newmodel",
    level: 15,
    verified: true,
    productName: "Amazing Model",
    productCategory: "Category > Subcategory",
    likes: 500,
    stars: 4.8,
    downloads: 1500,
    productImage: "/images/feature_models_5.png",
    sellerImage: "/images/seller_5.png",
  },
  {
    id: 6,
    name: "New Model",
    username: "@newmodel",
    level: 15,
    verified: false,
    productName: "Amazing Model",
    productCategory: "Category > Subcategory",
    likes: 500,
    stars: 4.8,
    downloads: 1500,
    productImage: "/images/feature_models_6.png",
    sellerImage: "/images/seller_6.png",
  },
];

const FeaturedModels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Sayfada gösterilecek kart sayısı

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
      <h2 className="text-3xl font-bold text-white mb-10">Featured Models</h2>
      
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
                {/* Level kısmı - Satıcı görselinin altına mavi kutu */}
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

              {/* Ürün Görseli ve Etiket */}
              <div className="relative">
                <img
                  src={model.productImage}
                  alt={model.productName}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white p-1 rounded-full">
                  <IoIosBulb size={24} />
                </div>
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

        {/* Sol ve Sağ Oklar Mobilde Gizlenecek */}
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

export default FeaturedModels;
