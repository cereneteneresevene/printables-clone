import React from 'react';
import { FaCommentDots } from 'react-icons/fa'; // İkon örneği

const FeedbackButton = () => {
  return (
    <div className="fixed right-0 bottom-20 z-50">
      <a
        href="#"
        className="bg-[#eb6f40] hover:bg-orange-600 text-white py-3 px-2 rounded-r-lg flex items-center justify-center"
        style={{
          writingMode: "vertical-rl", // Metni dikey yap
          transform: "rotate(180deg)", // Metni ters döndür
        }}
      >
        <FaCommentDots size={24} className="mb-2 transform rotate-90" />
        <span className="mt-2">Share your feedback</span>
      </a>
    </div>
  );
};

export default FeedbackButton;
