import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const clubs = [
  {
    id: 1,
    name: "tecnoculebras",
    username: "@tecnoculebras",
    level: 27,
    sellerImage: "/images/club_1.png",
    images: [
      "/images/product_1.png",
      "/images/product_2.png",
      "/images/product_3.png",
    ],
  },
  {
    id: 2,
    name: "Grandpa 3DPrints",
    username: "@Grandpa3DPrints",
    level: 34,
    sellerImage: "/images/club_2.png",
    images: [
      "/images/product_5.png",
      "/images/product_6.png",
      "/images/product_7.png",
      "/images/product_8.png",
    ],
  },
  {
    id: 3,
    name: "StawiamKlocki.pl",
    username: "@StawiamKlocki_pl",
    level: 17,
    sellerImage: "/images/club_3.png",
    images: [
      "/images/product_9.png",
      "/images/product_10.png",
      "/images/product_11.png",
      "/images/product_12.png",
    ],
  },
  {
    id: 4,
    name: "Eastman",
    username: "@Eastman",
    level: 15,
    sellerImage: "/images/club_4.png",
    images: [
      "/images/product_13.png",
      "/images/product_14.png",
      "/images/product_15.png",
      "/images/product_16.png",
    ],
  },
  {
    id: 5,
    name: "Kmobrain",
    username: "@Kmobrain",
    level: 16,
    sellerImage: "/images/club_5.png",
    images: [
      "/images/product_17.png",
      "/images/product_18.png",
      "/images/product_19.png",
      "/images/product_20.png",
    ],
  },
  {
    id: 6,
    name: "Jorge",
    username: "@jorge_rui",
    level: 21,
    sellerImage: "/images/club_6.png",
    images: [
      "/images/product_21.png",
      "/images/product_22.png",
      "/images/product_23.png",
      "/images/product_24.png",
    ],
  },
];

const DiscoverCreatorsClubs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; 

  const handleNext = () => {
    if (currentIndex < clubs.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#1b1d20] p-10 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-14">
        Discover Creators' Clubs
      </h2>

      <div className="relative">
        {/* Kulüp Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {clubs.slice(currentIndex, currentIndex + itemsPerPage).map((club) => (
            <div
              key={club.id}
              className="border border-[#333537] bg-[#1c1e21]  overflow-visible shadow-lg relative p-4"
              style={{ overflow: "visible" }} // overflow-visible eklendi
            >
              {/* Kulüp Bilgisi */}
              <div className="relative flex flex-col items-center">
                <div className="relative -mt-14 z-10"> {/* Görseli yukarı kaydırdık */}
                  <img
                    src={club.sellerImage} // Satıcı görseli
                    alt={club.name}
                    className="w-32 h-32 rounded-full border-4 border-[#1c1e21] object-cover"
                    style={{ objectPosition: 'top' }} // Görselin üst kısmını göstermek için
                  />
                </div>
                <div className="bg-[#40c8e8] text-black px-2 py-1 rounded-full -mt-3 text-sm z-20">
                  Lvl {club.level}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-white hover:text-[#d15836] cursor-pointer">{club.name}</h3>
                  <p className="text-gray-400 text-sm cursor-pointer">{club.username}</p>
                </div>
              </div>

              {/* Ürün Görselleri */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {club.images.slice(0, 4).map((image, idx) => (
                  <img
                    key={idx}
                    src={image} 
                    alt={`Product ${idx + 1}`}
                    className="w-full h-20 object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sol Ok */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836]"
          >
            <IoIosArrowBack size={24} />
          </button>
        )}

        {/* Sağ Ok */}
        {currentIndex < clubs.length - itemsPerPage && (
          <button
            onClick={handleNext}
            className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836]"
          >
            <IoIosArrowForward size={24} />
          </button>
        )}
      </div>

      {/* About Clubs Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#eb6f40] text-black px-6 py-3 rounded-md text-lg hover:bg-[#d15836]">
            ABOUT CLUBS
        </button>
      </div>
    </div>
  );
};

export default DiscoverCreatorsClubs;
