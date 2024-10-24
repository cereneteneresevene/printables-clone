import React from 'react';
import { FaPlus, FaDownload } from 'react-icons/fa';

const UserPrintFilesTab = ({ product }) => {
  const printFiles = product.printFiles || []; // Eğer product içinde printFiles yoksa boş bir dizi varsayıyoruz.

  return (
    <div className="bg-[#1c1e21] p-10 lg:px-24 min-h-screen max-w-screen-lg mx-auto"> {/* Sağdan soldan geniş boşluk eklemek için max-w-screen-lg ve mx-auto eklendi */}
      {/* Başlık ve Buton */}
      <div className="flex justify-start items-center space-x-4 mb-2"> {/* space-x-4 başlık ve buton arasında boşluk bırakır */}
        <h2 className="text-3xl font-bold text-white">User print files</h2>
        <button className="flex items-center px-2 py-1 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-gray-800 ">
          <FaPlus className="mr-2" />
          Add print file
        </button>
      </div>

      {/* İçerik */}
      {printFiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printFiles.map((file) => (
            <div key={file.id} className="bg-[#1c1e21] border border-[#383a3c] rounded-lg overflow-hidden shadow-lg p-4">
              <h4 className="text-xl font-bold text-white mb-1">{file.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{file.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={file.downloadLink}
                  className="px-3 py-1 border text-white flex items-center space-x-2 hover:border-orange-500 hover:text-orange-500"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 text-center mt-10">No items found</div>
      )}
    </div>
  );
};

export default UserPrintFilesTab;
