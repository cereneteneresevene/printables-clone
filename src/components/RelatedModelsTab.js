import React from 'react';
import { FaHeart, FaStar, FaDownload, FaCheckCircle } from 'react-icons/fa';

const RelatedModelsTab = ({ product }) => {
  const relatedModels = product.relatedModels; // product'tan relatedModels verisini alıyoruz

  return (
    <div className="bg-[#1c1e21] p-10 min-h-screen max-w-screen-lg mx-auto"> {/* max-w-screen-lg ve mx-auto ile ortalandı */}
      <h2 className="text-3xl font-bold text-white mb-10">Related models</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedModels.map((model, index) => (
          <div key={index} className="bg-[#1c1e21] border border-[#383a3c] rounded-lg overflow-hidden shadow-lg">
            
            {/* Satıcı Bilgisi */}
            <div className="flex items-center p-4">
              <img
                src={model.seller.avatar}
                alt={model.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  {model.seller.name}
                  {model.seller.verified && (
                    <FaCheckCircle className="ml-2 text-blue-500" />
                  )}
                </h3>
                <p className="text-gray-400">{model.seller.username}</p>
              </div>
            </div>

            {/* Ürün Görseli */}
            <img
              src={model.productImage}
              alt={model.productName}
              className="w-full h-60 object-cover"
            />

            {/* Ürün Bilgisi */}
            <div className="p-4">
              <h4 className="text-xl font-bold text-white mb-1">
                {model.productName}
              </h4>
              <p className="text-sm text-gray-400 mb-4">{model.productCategory}</p>
              <hr className="border-gray-600 mb-4" />

              {/* Beğeni, Yıldız, İndirme */}
              <div className="flex justify-between items-center text-gray-400">
                <div className="flex items-center space-x-1">
                  <FaHeart className="hover:text-orange-500 cursor-pointer" />
                  <span>{model.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaStar className="hover:text-yellow-500 cursor-pointer" />
                  <span>{model.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaDownload className="hover:text-orange-500 cursor-pointer" />
                  <span>{model.downloads}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedModelsTab;
