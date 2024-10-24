import React from 'react';
import { FaHeart, FaFolder } from 'react-icons/fa';

const CollectionsTab = ({ product }) => {
  const collections = product.collectionData || []; // product içinden collections verisini çekiyoruz, undefined ise boş dizi olarak varsayıyoruz

  return (
    <div className="bg-[#1c1e21] p-10 lg:px-24 min-h-screen max-w-screen-lg mx-auto"> {/* max-w-screen-lg ve mx-auto ile ortalandı */}
      <h2 className="text-3xl font-bold text-white mb-10">
        In collections ({collections.length} public collections)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-[#1c1e21] border border-[#383a3c] rounded-lg overflow-hidden shadow-lg">
            
            {/* Owner Bilgisi */}
            <div className="flex items-center p-4">
              <img
                src={collection.owner.avatar}
                alt={collection.owner.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  {collection.owner.name}
                </h3>
                <p className="text-gray-400">{collection.owner.username}</p>
              </div>
            </div>

            {/* Koleksiyon Görselleri */}
            <div className="grid grid-cols-2 gap-2 p-4">
              {collection.images.slice(0, 4).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Collection ${collection.collectionName} - Image ${idx + 1}`}
                  className="w-full h-24 object-cover"
                />
              ))}
            </div>

            {/* Koleksiyon Bilgisi */}
            <div className="p-4">
              <h4 className="text-xl font-bold text-white mb-1">
                {collection.collectionName}
              </h4>
              <p className="text-sm text-gray-400 mb-4 flex items-center">
                <FaFolder className="mr-2" /> Collection of {collection.modelCount} models
              </p>
              <hr className="border-gray-600 mb-4" />

              {/* Beğeni */}
              <div className="flex justify-between items-center text-gray-400">
                <div className="flex items-center space-x-1">
                  <FaHeart className="hover:text-orange-500 cursor-pointer" />
                  <span>{collection.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsTab;
