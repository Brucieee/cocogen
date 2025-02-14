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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-lg flex flex-col max-w-[479px] max-h-[90vh] overflow-visible"
      >
        {/* Close Button - Now fully visible */}
        <button 
          onClick={onClose} 
          className="absolute right-[-12px] top-[-10px] flex items-center justify-center p-[12px] rounded-full bg-[#ECECEC] shadow-md hover:bg-gray-300 transition z-20"
          style={{ width: "40px", height: "40px" }} // Ensures a perfect circle
        >
          <img src="../icons/Icon-CloseModal.svg" alt="Close" className="w-[20px] h-[20px]" />
        </button>

        {/* Top Section: Image */}
        <div 
          className="h-[187px] bg-cover bg-center rounded-t-lg border-t-8 border-teal-600"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Title & Subtitle */}
        <div className="w-full px-0 py-[15px] flex flex-col justify-center items-center text-center">
          <h2 className="text-[23px] font-bold text-[#2D2727]">{title}</h2>
          <h3 className="text-[16px] text-[#585858] font-normal mt-[8px]">{subtitle}</h3>
        </div>

        {/* Content Section */}
        <div className="w-full px-[35px] pt-[25px] flex flex-col items-center">
          {paragraphs.map((text, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-[15px] w-full text-[#3B3939] 
                ${index !== paragraphs.length - 1 ? "mb-[25px]" : ""}`} // Adds 25px margin only between items
            >
              <img src="../icons/Icon-CheckModal.svg" alt="Check" className="w-[20px] h-[20px]" />
              <p className="w-[382px] text-[14px] font-normal leading-[24px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Modal Button */}
        <div className="flex justify-center p-[35px]">
          <ModalButton onClick={onClose} />
        </div>
      </motion.div>
    </div>
  );
};

export default ModalComponent;
