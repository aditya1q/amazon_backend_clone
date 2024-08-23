"use client"

import React, { useState } from 'react'
import { GrLanguage } from 'react-icons/gr';

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = ['English', 'Hindi', 'Marathi', 'Telgu', 'Tamil', 'Malayalam'];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };
    return (
        <div className="relative flex z-20">
            <button
                className="flex items-center space-x-2 px-1 py-1 bg-gray-200 text-gray-800 rounded-md shadow-md"
                onClick={toggleDropdown}
            // style={{ zIndex: showDropdown ? 2 : 1 }}

            >
                <span className="font-medium">{selectedLanguage}</span>
                <span><GrLanguage /></span>
            </button>
            {showDropdown && (
                <ul className="absolute w-32 mt-12 text-[13px] bg-white border rounded-md shadow-lg z-20">
                    {languages.map((language) => (
                        <li key={language}>
                            <a
                                href="#"
                                className=" block px-3 py-1 text-gray-800 hover:bg-blue-500 hover:text-white z-20"
                                onClick={() => handleLanguageSelect(language)}
                            >
                                {language}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default LanguageSelector