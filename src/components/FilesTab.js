import React from 'react';
import { FaCheck, FaTimes, FaDownload } from 'react-icons/fa'; // Tik ve çarpı işaretleri için

const FilesTab = ({ product }) => {
  return (
    <div className="text-white p-4 md:p-6 max-w-screen-lg mx-auto"> {/* lg ekranlarda sağdan ve soldan boşluk ekledik */}
      {/* Model Files Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Model files</h2>
        <a href="/path/to/all/files" className="px-4 py-2 border text-white mb-4 flex items-center space-x-2 hover:border-orange-500 hover:text-orange-500">
          <FaDownload />
          <span>All Model Files</span>
        </a>
      </div>

      <hr className="border-gray-500 mb-4" />

      <div className="space-y-4">
        {product.files.map((file, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-600"
          >
            <div className="flex items-start sm:items-center">
              <img
                src={file.image}
                alt={file.name}
                className="h-12 w-12 mr-4"
              />
              <div>
                <p className="text-sm font-bold">{file.name}</p>
                <p className="text-sm text-white">{file.description}</p>
                <div className="flex space-x-4">
                  {/* Dosya boyutu ve tarih yan yana */}
                  <p className="text-sm text-gray-400">{file.size}</p>
                  <p className="text-sm text-gray-400">{file.date}</p>
                </div>
              </div>
            </div>
            {/* Butonlar mobilde yan yana, lg ekranlarda alt alta */}
            <div className="flex flex-row sm:flex-row lg:flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-y-2 mt-4 sm:mt-0">
              <a
                href={file.downloadLink}
                className="px-3 py-1 border text-white flex items-center space-x-2 hover:border-orange-500 hover:text-orange-500"
              >
                <FaDownload />
                <span>Download</span>
              </a>
              <button className="px-3 py-1 border hover:border-orange-500 hover:text-orange-500">
                Slice
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Model Origin Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Model origin</h2>
        <p className="text-sm text-gray-400">{product.details.modelOrigin}</p>
      </div>

      {/* License Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">License</h2>
        <p className="text-sm text-gray-400 mb-2">
          This work is licensed under a
        </p>
        <p className="text-orange-500 hover:underline">
          Creative Commons (4.0 International License)
        </p>
        <p className="text-orange-500 hover:underline mb-4">
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
      </div>
    </div>
  );
};

export default FilesTab;
