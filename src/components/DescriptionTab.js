import React from 'react';
import { FaDownload, FaHeart, FaStar, FaBookmark, FaCheck, FaTimes } from 'react-icons/fa';

const DescriptionTab = ({ product }) => {
  return (
    <div className="text-white p-4 md:p-6 bg-[#1c1e21] rounded-lg max-w-screen-lg mx-auto">
      {/* Title, Description, and PDF in the same line */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold">Description</h2>
        <a
          href={product.details.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 md:mt-0 border border-gray-500 text-gray-300 px-3 py-1 rounded flex items-center hover:text-orange-600 hover:border-orange-600 transition-colors duration-200"
        >
          <FaDownload className="mr-2" /> PDF
        </a>
      </div>

      <p className="text-gray-400 mb-6 text-sm md:text-base">{product.details.description}</p>

      {/* YouTube Embed */}
      <div className="mb-6">
        <iframe
          className="w-full"
          height="315"
          src={product.details.youtubeLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Printing Details */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Printing</h3>
        <ul className="text-gray-400 list-disc ml-5">
          {product.details.printing.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* All Sculptember Models */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">All Sculptember Models</h3>
        <img
          src={product.details.allSculptemberModels.image}
          alt="Sculptember Models"
          className="w-full md:w-[750px] h-auto mb-4"
        />
        <ul className="text-orange-500 list-disc ml-5">
          {product.details.allSculptemberModels.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

      {/* More Customization */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">More Customization</h3>
        <p className="text-gray-400 text-sm md:text-base">{product.details.moreCustomization}</p>
      </div>

      {/* Can I sell copies of this? */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Can I sell copies of this?</h3>
        <p className="text-gray-400 text-sm md:text-base">{product.details.canISellCopies.text}</p>
        <p className="text-gray-400 text-sm md:text-base">{product.details.canISellCopies.additionalText}</p>
      </div>

      {/* Recommended Attribution */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Recommended Attribution Text</h3>
        <p className="text-gray-400 text-sm md:text-base">{product.details.recommendedAttribution}</p>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <hr className="border-gray-600 mb-4" />
        <div className="flex flex-wrap gap-2">
          {product.details.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-gray-700 px-2 py-1 rounded hover:bg-transparent hover:text-gray-400 border hover:border-gray-400 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <hr className="border-gray-600 mt-4" />
      </div>

      {/* Model Origin */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Model Origin</h3>
        <p className="text-gray-400 text-sm md:text-base">{product.details.modelOrigin}</p>
      </div>

      {/* License Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">License</h2>
        <p className="text-sm text-gray-400 mb-2">
          This work is licensed under a
        </p>
        <p className="text-orange-500 hover:underline"> {/* Hover sırasında underline eklenir */}
          Creative Commons (4.0 International License)
        </p>
        <p className="text-orange-500 hover:underline mb-4"> {/* Hover sırasında underline eklenir */}
          Attribution
        </p>
        <hr className="border-gray-500 mb-4" />
        <div className="grid grid-cols-1 gap-4">
          {product.details.license.allowed.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheck className="text-green-500" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
          {product.details.license.notAllowed.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaTimes className="text-red-500" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-500 mt-6" />
      </div>


      {/* Highlighted models from creator */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Highlighted Models from Creator</h3>
          <button className=" mt-12 text-sm text-white hover:text-orange-500 hover:border-orange-500 border border-b border-white px-2 py-2">
            View more
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* lg'de 3 sütun, sm'de 2 sütun */}
          {product.details.highlightedModels.map((model, index) => (
            <div key={index} className="bg-[#1c1e21] p-4 rounded-lg overflow-hidden shadow-lg">
              <img src={model.image} alt={model.name} className="w-full h-auto mb-2" />
              <h4 className="text-white text-sm">{model.name}</h4>
              <div className="text-gray-400 text-xs flex justify-between items-center mt-2">
                <div className="flex items-center space-x-1">
                  <FaHeart className="text-white" />
                  <span>{model.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaStar className="text-gray-400" />
                  <span>{model.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaDownload className="text-white" />
                  <span>{model.downloads}</span>
                </div>
                <FaBookmark className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Related Models</h3>
          <button className="text-sm text-white hover:text-orange-500 hover:border-orange-500 border border-b border-white px-2 py-2">
            View more
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* lg'de 3 sütun, sm'de 2 sütun */}
          {product.details.relatedModels.map((model, index) => (
            <div key={index} className="bg-[#1c1e21] p-4 rounded-lg overflow-hidden shadow-lg">
              <img src={model.image} alt={model.name} className="w-full h-auto mb-2" />
              <h4 className="text-white text-sm">{model.name}</h4>
              <div className="text-gray-400 text-xs flex justify-between items-center mt-2">
                <div className="flex items-center space-x-1">
                  <FaHeart className="text-white" />
                  <span>{model.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaStar className="text-gray-400" />
                  <span>{model.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaDownload className="text-white" />
                  <span>{model.downloads}</span>
                </div>
                <FaBookmark className="text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DescriptionTab;
