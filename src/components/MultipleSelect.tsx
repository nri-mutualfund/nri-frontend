"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const removeOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item !== option)
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!event.target.closest(".multi-select-container")) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative multi-select-container">
        <div
          className="border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer min-h-10 mb-6"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex overflow-x-auto">
            {selectedOptions.map((option) => (
              <span
                key={option}
                className="text-primary px-4 py-1 rounded-full mr-2 flex items-center border border-primary text-sm"
              >
                {options.find((opt) => opt.value === option)?.label}

                <RxCross2
                  className="ml-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(option);
                  }}
                  size={16}
                />
              </span>
            ))}
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 border border-gray-300 rounded-md bg-white shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className={`cursor-pointer p-2 hover:bg-gray-200 ${
                  selectedOptions.includes(option.value) ? "bg-gray-100" : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
