import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    image: "/images/image1.jpeg",
    title: "Vote for your favorite models and designers from finalists!",
    description: "Every vote also enters you for a chance to win a 3D printer!",
    buttons: [
      { label: "VOTE NOW", bgColor: "bg-[#eb6f40]", hoverColor: "hover:bg-[#d15836]" },
      { label: "Read more", bgColor: "bg-gray-800", hoverColor: "hover:underline", textColor: "text-orange-500"},
    ],
  },
  {
    image: "/images/image2.jpg",
    title: (
      <>
        <span>Flash Contest:</span> <span className="block">Scratchers</span>
      </>
    ),    
    description: "End: October 20, 23:59 GMT",
    buttons: [
      { label: "CONTEST PAGE", bgColor: "bg-[#eb6f40]", hoverColor: "hover:bg-[#d15836]" },
    ],
  },
  {
    image: "/images/image3.jpg",
    title: (
      <>
        <span>Contest:</span> <span className="block">Education Tools</span>
      </>
    ),
    description: "End: November 02, 23:59 GMT",
    buttons: [
      { label: "CONTEST PAGE", bgColor: "bg-[#eb6f40]", hoverColor: "hover:bg-[#d15836]" },
    ],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[500px] overflow-hidden flex flex-col">
      {/* Aktif Görsel */}
      <div className="w-full h-1/2 md:h-2/3">
        <img
          src={currentSlide.image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-left"
        />
      </div>

      {/* İçerik kısmı, mobilde altta siyah arka plan */}
      <div className="bg-black p-6 flex-grow">
        <div className="text-white space-y-4 max-w-md">
          {/* Mobilde ve büyük ekranlarda yazı boyutunu büyüttüm */}
          <h1 className="text-3xl md:text-4xl font-bold">{currentSlide.title}</h1>
          <p className="text-lg md:text-lg">{currentSlide.description}</p>
          <div className="flex space-x-4">
            {currentSlide.buttons.map((button, idx) => (
              <button
                key={idx}
                className={`${button.bgColor} ${button.textColor} px-8 py-3 rounded-md text-lg md:text-lg text-black ${button.hoverColor}`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sol Ok */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836] hover:text-gray-500"
        >
          <IoIosArrowBack size={24} />
        </button>
      )}

      {/* Sağ Ok */}
      {currentIndex < slides.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-[#d15836] hover:text-gray-500"
        >
          <IoIosArrowForward size={24} />
        </button>
      )}

      {/* Göstergeler */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
