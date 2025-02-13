import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalComponent1 = ({ children }) => {
  return (
    <CocoModal width="479px" height="720px">
      <ModalStructure>{children}</ModalStructure>
    </CocoModal>
  );
};

const ModalComponent2 = ({ children }) => {
  return (
    <CocoModal width="479px" height="610px">
      <ModalStructure>{children}</ModalStructure>
    </CocoModal>
  );
};

const ModalComponent3 = ({ children }) => {
    return (
      <CocoModal width="479px" height="541px">
        <ModalStructure>{children}</ModalStructure>
      </CocoModal>
    );
  };

  const ModalComponent4 = ({ children }) => {
    return (
      <CocoModal width="479px" height="614px">
        <ModalStructure>{children}</ModalStructure>
      </CocoModal>
    );
  };

  const ModalComponent5 = ({ children }) => {
    return (
      <CocoModal width="479px" height="551px">
        <ModalStructure>{children}</ModalStructure>
      </CocoModal>
    );
  };

  const ModalComponent6 = ({ children }) => {
    return (
      <CocoModal width="479px" height="454px">
        <ModalStructure>{children}</ModalStructure>
      </CocoModal>
    );
  };

  const ModalComponent7 = ({ children }) => {
    return (
      <CocoModal width="479px" height="600px">
        <ModalStructure>{children}</ModalStructure>
      </CocoModal>
    );
  };

const CocoModal = ({ width, height, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white rounded-2xl shadow-lg flex flex-col`}
      style={{ width: width, height: height }}
    >
      {children}
    </motion.div>
  );
};

const ModalStructure = ({ children }) => {
  return <div className="flex flex-col ">{children}</div>;
};

const Picture = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-[479px] h-[187px] rounded-t-lg" />;
};

const Title = ({ children }) => {
  return <h2 className="text-[23px] font-bold text-[#2D2727] mt-[15px] text-center">{children}</h2>;
};

const SubTitle = ({ children }) => {
  return <h3 className="text-[16px] text-[#585858] font-normal mt-[8px] mb-[15px] text-center">{children}</h3>;
};

const Contents = ({ paragraphs = [] }) => {
  return (
    <div className="text-justify pt-[25px] pb-[25px] pr-[25px] pl-[25px] ">
      {paragraphs.map((text, index) => (
        <div key={index} className="flex items-center mb-[25px] text-[#3B3939]">
          <img src="../icons/checkicon.svg" alt="Check" className="w-[20px] h-[20px] mr-[15px]" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export { ModalComponent1, ModalComponent2, ModalComponent3, ModalComponent4, ModalComponent5, ModalComponent6, ModalComponent7, ModalStructure, Picture, Title, SubTitle, Contents };
