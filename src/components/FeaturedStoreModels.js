import { useState } from "react";
import { FaHeart, FaStar, FaBookmark, FaCheckCircle, FaDollarSign } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const models = [
  {
    id: 1,
    name: "Pablo Inventos",
    username: "@PabloInventos",
    level: 5,
    verified: true,
    productName: "Minimalist Industrial Mechanical Mobile Phone Stand",
    productCategory: "Gadgets > Portable Devices", 
    price: 7,
    isFeatured: false,
    likes: 37,
    stars: 5,
    saves: 0,
    productImage: "/images/fsm_content1.png",
    sellerImage: "/images/fsm_seller1.png",
  },
  {
    id: 2,
    name: "3DPrintBunny",
    username: "@3DPrintBunny",
    level: 20,
    verified: true,
    productName: "Blue Jay String Art",
    productCategory: "Art & Design > Other Art & Designs",
    price: 5,
    isFeatured: true,
    likes: 3,
    stars: 0,
    saves: 0,
    productImage: "/images/fsm_content2.png",
    sellerImage: "/images/fsm_seller2.png",
  },
  {
    id: 3,
    name: "Bamingo Design",
    username: "@BamingoDesign",
    level: 23,
    verified: false,
    productName: "Ocean Wildlife Coasters",
    productCategory: "Household > Home Decor",
    price: 5,
    isFeatured: true,
    likes: 15,
    stars: 0,
    saves: 0,
    productImage: "/images/fsm_content3.png",
    sellerImage: "/images/fsm_seller3.png",
  },
  {
    id: 4,
    name: "Magmabow",
    username: "@Magmabow",
    level: 23,
    verified: false,
    productName: "ESP32 Smart Switch",
    productCategory: "Hobby & Makers > Electronics",
    price: 9,
    isFeatured: false,
    likes: 26,
    stars: 0,
    saves: 0,
    productImage: "/images/fsm_content4.png",
    sellerImage: "/images/fsm_seller4.png",
  },
  {
    id: 5,
    name: "New Model",
    username: "@newmodel",
    level: 15,
    verified: true,
    productName: "Amazing Model",
    productCategory: "Category > Subcategory",
    price: 7,
    isFeatured: true,
    likes: 50,
    stars: 4.8,
    saves: 0,
    productImage: "/images/fsm_content5.png",
    sellerImage: "/images/fsm_seller5.png",
  },
];

const FeaturedStoreModels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Bir sayfada gösterilecek model sayısı

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
    <div className="bg-[#1c1e21] p-10 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-10">Featured Store Models</h2>

      <div className="relative">
        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.slice(currentIndex, currentIndex + itemsPerPage).map((model) => (
            <div key={model.id} className="bg-[#1c1e21] border border-[#383a3c] rounded-none overflow-hidden shadow-lg">
              
              {/* Satıcı Bilgisi */}
              <div className="flex items-center p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={model.sellerImage}
                    alt={model.name}
                    className="w-12 h-12 rounded-full"
                  />
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

              {/* Ürün Görseli ve Etiketler */}
              <div className="relative">
                <img
                  src={model.productImage}
                  alt={model.productName}
                  className="w-full h-60 object-cover"
                />
                {model.isFeatured && (
                  <div className="absolute top-2 left-2 bg-purple-500 text-white p-1 rounded-full">
                    <FaStar size={20} />
                  </div>
                )}

                {/* Fiyat */}
                <div className="absolute bottom-0 right-0 bg-green-500 text-white px-2 py-1 rounded-none flex items-center">
                  <FaDollarSign size={14} />
                  <span className="ml-1">{model.price}</span>
                </div>
              </div>

              {/* Ürün Bilgisi */}
              <div className="p-4">
                <h4 className="text-xl font-bold text-white mb-1 hover:text-[#d15836] cursor-pointer">
                  {model.productName}
                </h4>
                <p className="text-sm text-gray-400 mb-4 hover:underline cursor-pointer">
                  {model.productCategory}
                </p>
                <hr className="border-gray-600 mb-4" />

                {/* Beğeni, Yıldız, Kaydetme */}
                <div className="flex justify-between items-center text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FaHeart className="hover:text-orange-500 cursor-pointer" />
                    <span>{model.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar/>
                    <span>{model.stars}</span>
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

      {/* Explore Store Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#eb6f40] text-black px-6 py-3 rounded-md text-lg hover:bg-[#d15836]">
          EXPLORE STORE
        </button>
      </div>
    </div>
  );
};

export default FeaturedStoreModels;
