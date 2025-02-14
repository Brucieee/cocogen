import React from "react";
import { motion } from "framer-motion";
import ModalButton from "./ModalButton";

const ModalComponent = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  subtitle, 
  paragraphs = [] 
}) => {
  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-lg flex flex-col w-full max-w-[90%] md:max-w-[479px] max-h-[90vh]"
      >
        {/* Close Button - Always Visible */}
        <button 
          onClick={onClose} 
          className="absolute right-[-12px] top-[-10px] flex items-center justify-center w-10 h-10 rounded-full bg-[#ECECEC] shadow-md hover:bg-gray-300 transition z-[100]"
        >
          <img src="/icons/Icon-CloseModal.svg" alt="Close" className="w-5 h-5" />
        </button>

        {/* Top Section: Image */}
        <div 
          className="h-[150px] md:h-[187px] bg-cover bg-center rounded-t-2xl border-t-8 border-teal-600"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Title & Subtitle */}
        <div className="w-full text-center mt-4 px-6">
          <h2 className="text-lg md:text-[23px] font-bold text-[#2D2727]">{title}</h2>
          <h3 className="text-sm md:text-[16px] text-[#585858] font-normal mt-2">{subtitle}</h3>
        </div>

        {/* Scrollable Content */}
        <div className="w-full px-[35px] pt-[25px] pb-[35px] flex-grow overflow-y-auto max-h-[50vh]">
          {paragraphs.map((text, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 md:gap-[15px] w-full text-[#3B3939] 
                ${index !== paragraphs.length - 1 ? "mb-4 md:mb-[25px]" : ""}`}
            >
              <img src="/icons/Icon-CheckModal.svg" alt="Check" className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-sm md:text-[14px] font-normal leading-[22px] md:leading-[24px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Button Always Visible */}
        <div className="flex justify-center py-6 px-[35px]">
          <ModalButton onClick={onClose} />
        </div>
      </motion.div>
    </div>
  );
};

export default ModalComponent;