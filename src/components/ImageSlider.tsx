"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = Math.max(0, currentIndex - 2);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = Math.min(images.length - 2, currentIndex + 2);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden relative">
      <div className="flex items-center justify-start overflow-x-auto">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-[calc(100%/2)] px-2`}
          >
            <div className="relative">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 focus:outline-none z-10"
      >
        <BsChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 focus:outline-none z-10"
      >
        <BsChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
