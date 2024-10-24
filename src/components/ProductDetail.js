import { useRouter } from 'next/router';
import { useState } from 'react';
import { productData } from '@/data/productData';
import Tabs from '@/components/Tabs'; 
import TabContent from '@/components/TabContent'; // TabContent component'ini import ettik
import { FaHeart, FaDownload, FaBookmark, FaCube, FaShareAlt, FaCheckCircle, FaStar, FaEye, FaBox } from 'react-icons/fa';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [menuOpen, setMenuOpen] = useState(false);
  const product = productData.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.mainImage); 
  const [activeTab, setActiveTab] = useState(0); // Aktif sekmeyi tutan state

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThumbnailClick = (thumb) => {
    setMainImage(thumb);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

const tabs = [
  { label: 'Details', count: null },
  { label: 'Files', count: product.files.length },
  { label: 'Makes & Comments', count: product.makesData.length },
  { label: 'Remixes', count: product.remixes.length },
  { label: 'Related Models', count: product.relatedModels.length },
  { label: 'Collections', count: product.collectionData.length },
  { label: 'User Print Files', count: product.printFiles.length },
];


  return (
    <div className="min-h-screen p-5 md:p-20 bg-[#1c1e21]"> {/* padding değerini mobilde küçülttük */} 
      <div className="flex flex-col md:flex-row"> {/* Flexbox yapısını mobilde dikey, büyük ekranlarda yatay hizaladık */}
        {/* Sol taraf - görseller */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2"> {/* Genişlik mobilde tam, büyük ekranda yarı olacak şekilde ayarlandı */}
          <img src={mainImage} alt={product.name} className="w-full h-auto" /> 
          <div className="flex space-x-2 overflow-x-auto"> {/* Thumbnail resimlerinde mobilde yatay kaydırma eklendi */}
            {product.thumbnailImages.map((thumb, index) => (
              <img 
                key={index} 
                src={thumb} 
                alt={`thumbnail-${index}`} 
                className="w-1/3 h-auto rounded-md border border-gray-700 cursor-pointer" 
                onClick={() => handleThumbnailClick(thumb)} 
              />
            ))}
          </div>
        </div>
        
        {/* Sağ taraf - ürün bilgisi */}
        <div className="mt-6 md:ml-10 w-full md:w-2/5"> {/* Üstten boşluk vererek mobile uyum sağladık */}
          <div className="text-gray-500 space-x-2 md:space-x-4 mb-4 flex-wrap"> {/* Flex-wrap ile kategorilerin taşmasını engelledik */}
            {product.categoryBreadcrumbs.map((category, index) => (
              <span key={index} className="border bg-[#18191a] border-b border-transparent rounded-lg hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 text-xs md:text-sm">{category}</span> 
            ))}
          </div>

          {/* Başlık ve üç nokta menü */}
          <div className="flex justify-between items-start">
            <h1 className="text-xl md:text-3xl font-bold text-white">{product.name}</h1> {/* Başlığı mobile uyumlu hale getirdik */}
            <div className="relative">
              <button onClick={handleMenuToggle} className="text-gray-500 hover:text-white">...</button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
                  <button className="block w-full text-left px-4 py-2 text-sm text-black" onClick={() => alert("Reported!")}>Report</button>
                </div>
              )}
            </div>
          </div>

          {/* Yıldızlar ve inceleme sayısı */}
          <div className="flex items-center space-x-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`text-${i < Math.floor(product.stars) ? "yellow-400" : "gray-300"}`} />
            ))}
            <span className="text-gray-400 text-sm md:text-base">{product.reviews} reviews</span> {/* Yorum sayısını mobile uyumlu hale getirdik */}
          </div>

          {/* Sahip bilgisi */}
          <div className="flex items-center mt-4">
            <img src={product.designerImage} alt={product.designer} className="w-10 h-10 md:w-12 md:h-12 rounded-full" /> {/* Avatar boyutunu mobilde küçülttük */}
            <div className="ml-4">
              <p className="text-lg">{product.designer}</p>
              <p className="text-gray-400 text-xs md:text-sm">{product.designerUsername}</p> {/* Kullanıcı adı boyutunu küçülttük */}
            </div>
            {product.verified && <FaCheckCircle className="ml-2 text-blue-500" />}
            <div className="mt-3 ml-4 md:ml-6"> {/* Boşluklar mobilde düzenlendi */}
              <button className="px-4 py-2 border border-b text-white rounded hover:border-orange-500 hover:text-orange-500 transition-colors duration-200">
                Follow
              </button>
            </div>
          </div>

          {/* Ürün açıklaması */}
          <hr className="my-4 border-gray-600" />
          <p className="text-sm md:text-base text-white">{product.description}</p> {/* Ürün açıklamasını mobilde küçülttük */}

          {/* İndirme butonu */}
          <button className="mt-4 bg-[#eb6f40] text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-orange-600 transition-colors duration-200 w-full">
            <FaDownload className="inline-block mr-2" /> Download
          </button>

          {/* Alt dört buton */}
          <div className="flex justify-between mt-4 bg-[#1c1e21] p-2 md:p-4 rounded-lg border border-gray-700">
            <button className="flex items-center p-2 md:p-3 hover:text-orange-500 transition-colors duration-200 text-white border-gray-700 last:border-none">
              <FaHeart className="text-xl md:text-2xl mr-2" /> {/* İkon boyutları mobile göre ayarlandı */}
              <span className="text-xs md:text-sm">Like</span>
            </button>
          
            <button className="flex items-center p-2 md:p-3 hover:text-orange-500 transition-colors duration-200 text-white border-gray-700 last:border-none">
              <FaBookmark className="text-xl md:text-2xl mr-2" />
            </button>
          
            <button className="flex items-center p-2 md:p-3 hover:text-orange-500 transition-colors duration-200 text-white border-gray-700 last:border-none">
              <FaBox className="text-xl md:text-2xl mr-2" />
            </button>
          
            <button className="flex items-center p-2 md:p-3 hover:text-orange-500 transition-colors duration-200 text-white">
              <FaShareAlt className="text-xl md:text-2xl mr-2" />
              <span className="text-xs md:text-sm">Share</span>
            </button>
          </div>

          {/* İstatistikler */}
          <div className="flex space-x-4 mt-6 text-xs md:text-sm text-gray-700"> {/* İstatistik boyutunu mobile göre küçülttük */}
            <div>
              <FaHeart className="inline-block mr-1" /> {product.likes}
            </div>
            <div>
              <FaDownload className="inline-block mr-1" /> {product.downloads}
            </div>
            <div>
              <FaCube className="inline-block mr-1" /> {product.views}
            </div>
            <div>
              <FaEye className="inline-block mr-1" /> {product.makes}
            </div>
            <div>
              Updated: {product.updated}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs ve TabContent bileşenleri için boşluk düzenlemeleri */}
      <div className="mt-6 md:mt-10">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className="mt-4 md:mt-6">
        <TabContent activeTab={activeTab} product={product} />
      </div>

    </div>

  );
};

export default ProductDetail;
