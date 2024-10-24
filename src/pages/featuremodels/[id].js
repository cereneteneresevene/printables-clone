import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Search from "@/components/Search";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import FeedbackButton from "@/components/FeedbackButton ";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // URL'den id'yi alıyoruz

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
      {/* Search bileşeni */}
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

      {/* Ürün sayfası içeriği */}
      <ProductDetail/>
      <div className="hidden lg:block">
        <FeedbackButton/>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
