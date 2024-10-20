import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import CarouselLg from "../components/CarouselLg"; 
import FeaturedModels from "../components/FeatureModels.js";
import Search from "@/components/Search";
import Navbar from "@/components/Navbar";
import DiscoverCreatorsClubs from "@/components/DiscoverCreatorsClubs";
import FeaturedStoreModels from "@/components/FeaturedStoreModels";
import DesignContests from "@/components/DesignContests";
import NewsFromTheBlog from "@/components/NewsFromTheBlog";
import NewestModels from "@/components/NewestModels";
import Footer from "@/components/Footer";
import FeedbackButton from "@/components/FeedbackButton ";

export default function Index() {
  const [showNavbar, setShowNavbar] = useState(true); // Navbar'ın görünürlüğü
  const [lastScrollY, setLastScrollY] = useState(0);  // Son kaydırma konumu

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // Aşağı kaydırılıyorsa Navbar gizlenir, yukarı kaydırılıyorsa gösterilir
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Temizleme işlemi: event listener'ı kaldır
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Search />
      </div>

      {/* Navbar, kaydırma yönüne göre gösterilir veya gizlenir */}
      <div
        className={`sticky top-10 z-40 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      <div className="block lg:hidden">
        <Carousel />
      </div>
      <div className="hidden lg:block">
        <CarouselLg />
      </div>
      <FeaturedModels />
      <DiscoverCreatorsClubs />
      <FeaturedStoreModels />
      <DesignContests />
      <NewsFromTheBlog />
      <NewestModels />
      <Footer />
      <div className="hidden lg:block">
        <FeedbackButton/>
      </div>
      
    </div>
  );
}
