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
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const ImageSlider = () => {
  const swiperRef = useRef<any>(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
    <div className="flex gap-4 md:gap-4 items-center justify-center w-full">
      <button className="hidden md:block" onClick={handlePrevClick}>
        <FaChevronLeft color="#6C6C6C" size={40} />
      </button>
      <div className="max-w-[250px] sm:max-w-sm md:max-w-xl lg:max-w-[600px] bg-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          ref={swiperRef}
          className="mySwiper bg-white rounded-xl"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
            <SwiperSlide className=" bg-white " key={index}>
              <div className="bg-white rounded-xl border-2 py-12 px-6 ">
                <Image
                  src={"/assets/cords.png"}
                  alt="cots"
                  className="w-[20px]"
                  width={500}
                  height={1}
                />
                <p className="font-light   mt-4 ">
                  Lorem ipsum dolor sit amet consectetur. Massa commodo gravida
                  urna vel mattis. Lorem ipsum dolor sit amet consectetur. Massa
                  commodo gravida urna vel mattis.
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
                    <p className="font-medium text-gray-800  ">
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

      <button className="hidden md:block" onClick={handleNextClick}>
        <FaChevronRight color="#6C6C6C" size={40} />
      </button>
    </div>
    <div className="flex gap-4 justify-center pt-6">
    <button className="md:hidden" onClick={handlePrevClick}>
        <FaChevronLeft color="#6C6C6C" size={40} />
      </button>
    <button className="md:hidden" onClick={handleNextClick}>
        <FaChevronRight color="#6C6C6C" size={40} />
      </button>
    </div>
    </div>
  );
};
export default ImageSlider;
