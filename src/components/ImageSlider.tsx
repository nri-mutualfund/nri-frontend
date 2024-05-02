"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
const ImageSlider = () => {
  const swiperRef = useRef<Swiper | null>(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Access swiper methods correctly
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Access swiper methods correctly
    }
  };

  return (
    <div className="flex gap-4 md:gap-8 items-center justify-center">
      <button
        className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] flex justify-center items-center rounded-lg bg-gradient-to-r from-[#0080004D] to-white"
        onClick={handlePrevClick}
      >
        <FaPlay color="#fff" size={30} className="rotate-180" />
      </button>
      <div className="w-[60%] lg:w-1/2  bg-white block md:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          ref={swiperRef}
          className="mySwiper bg-white"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
            <SwiperSlide className=" bg-white " key={index}>
              <div className="bg-white rounded-lg py-8 px-6 border-gradient drop-shadow-lg">
                <Image
                  src={"/assets/cords.png"}
                  alt="cots"
                  className="w-[20px]"
                  width={500}
                  height={1}
                />
                <p className="font-light text-sm mt-4 leading-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Massa commodo gravida
                  urna vel mattis. Lorem ipsum dolor sit amet consectetur. Massa
                  commodo gravida urna vel mattis. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
                <div className="flex gap-4 items-center mt-10">
                  <Image
                    src={
                      index % 2 === 0
                        ? "/assets/female.png"
                        : "/assets/male.png"
                    }
                    alt="cots"
                    className="w-[60px]"
                    width={500}
                    height={1}
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {index % 2 === 0 ? "Navya Roy" : "Siddharth Soni"}
                    </p>
                    <p className="font-medium text-gray-800 text-sm">
                      {index % 2 === 0 ? "Music Enthusiast" : "Audiophile"}
                    </p>
                    <Image
                      src="/assets/star.png"
                      alt="cots"
                      className="w-[50px] mt-1"
                      width={500}
                      height={1}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-[70%] lg:w-1/2  bg-white hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          ref={swiperRef}
          className="mySwiper bg-white"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
            <SwiperSlide className=" bg-white " key={index}>
              <div className="bg-white rounded-lg py-8 px-6 border-gradient drop-shadow-lg">
                <Image
                  src={"/assets/cords.png"}
                  alt="cots"
                  className="w-[20px]"
                  width={500}
                  height={1}
                />
                <p className="font-light text-sm mt-4 leading-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Massa commodo gravida
                  urna vel mattis. Lorem ipsum dolor sit amet consectetur. Massa
                  commodo gravida urna vel mattis. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
                <div className="flex gap-4 items-center mt-10">
                  <Image
                    src={
                      index % 2 === 0
                        ? "/assets/female.png"
                        : "/assets/male.png"
                    }
                    alt="cots"
                    className="w-[60px]"
                    width={500}
                    height={1}
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {index % 2 === 0 ? "Navya Roy" : "Siddharth Soni"}
                    </p>
                    <p className="font-medium text-gray-800 text-sm">
                      {index % 2 === 0 ? "Music Enthusiast" : "Audiophile"}
                    </p>
                    <Image
                      src="/assets/star.png"
                      alt="cots"
                      className="w-[50px] mt-1"
                      width={500}
                      height={1}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] flex justify-center items-center rounded-lg bg-gradient-to-l from-[#0080004D] to-white"
        onClick={handleNextClick}
      >
        <FaPlay color="#fff" size={30} />
      </button>
    </div>
  );
};
export default ImageSlider;
