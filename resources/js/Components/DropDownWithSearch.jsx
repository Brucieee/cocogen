import React, { useState } from "react";

export default function InputDropdown({ label, required, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    
    const options = ["Korean", "Filipino", "Chinese", "Japanese"];
    const filteredOptions = options.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        setSearchTerm("");
    };

    return (
        <div className="w-[214px] group relative flex flex-col transition-all duration-300 mt-4">
            <label className="text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 text-primary group-hover:text-secondary"> 
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={selectedValue}
                    readOnly
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-[44px] w-[214px] border-0 border-b-2 bg-transparent flex items-center pb-[10px] gap-2.5 p-[10px] text-[14px] font-normal outline-none transition-all duration-300 focus:ring-0 focus:outline-none border-secondary text-gray-500 group-hover:bg-backgroundhover group-hover:border-primary group-hover:placeholder-black cursor-pointer"
                />
                <img 
                    src={isOpen ? "/icons/Icon-ArrowUp.svg" : "/icons/Icon-ArrowDown.svg"} 
                    alt="Toggle Dropdown" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50 cursor-pointer" 
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10">
                    <div className="relative p-2 border-b">
                        <img src="/icons/SearchIcon.svg" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="w-full pl-10 pr-2 py-1 border-none text-[14px] outline-none focus:ring-0 focus:border-primary"
                        />
                    </div>
                    <ul className="max-h-40 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handleSelect(option)} 
                                    className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer text-[14px]"
                                >
                                    {option}
                                </li>
                            ))
                        ) : (
                            <li className="p-2 text-gray-500 text-[14px]">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
