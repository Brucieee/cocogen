import React, { useRef } from "react";

const UploadButton = () => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click(); // Triggers file selection
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Uploaded file:", file);
            // Handle the uploaded file (e.g., upload to the server)
        }
    };

    return (
        <button
            className="inline-flex items-center justify-center gap-2 w-[149px] h-[44px] px-5 py-2.5 rounded bg-[#E4509A] text-white font-inter text-[16px] font-medium leading-6
            hover:bg-[#E4509A] hover:shadow-md hover:rounded-[3px]
            active:bg-[#EDCADC]"
            onClick={handleClick}
        >
            <img 
                src="/icons/Icon-UploadSimple.svg" 
                alt="Upload Icon" 
                className="w-6 h-6 filter invert brightness-0 contrast-200" 
            />
            Upload ID
            <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.docx,.csv"
            />
        </button>
    );
};

export default UploadButton;
