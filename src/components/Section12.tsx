"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const Section12 = () => {
  const router = useRouter();
  return (
    <section className=" px-4 md:px-20 lg:px-40  py-14 md:py-24 bg-secondary">
      <div className="grid grid-cols-1 gap-x-20 gap-y-16 mt-4 lg:grid-cols-2 items-center">
        <div className="w-full order-2 lg:order-1">
          <h1 className="text-[#424242]  font-semibold  max-w-md leading-tight text-center lg:text-left  mx-auto lg:mx-0">
            Why you should <span className="text-[#424242]">invest</span> in
            India?
          </h1>
          <div className="grid-cols-1 md:grid-cols-3 gap-14 items-center justify-center mt-14 hidden md:grid">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-primary font-bold leading-normal ">
                $4 Trillion
              </h2>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                5th Largest Economy
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <h2 className="text-primary font-bold leading-normal ">
                $125B+
              </h2>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                Annual Remittances
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <h2 className="text-primary font-bold leading-normal ">
                8%
              </h2>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                Annual GDP Growth
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center mt-8 md:hidden">
            <div className="mx-auto lg:mx-0 bg-secondary shadow-lg w-9/12 justify-center items-center flex flex-col py-4 rounded-lg border">
              <h4 className="text-[24px] text-primary font-bold leading-7">
                $4 Trillion
              </h4>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                5th Largest Economy
              </p>
            </div>
            <div className="mx-auto lg:mx-0 bg-secondary shadow-lg w-9/12 justify-center items-center flex flex-col py-4 rounded-lg border">
              <h4 className="text-[24px] text-primary font-bold leading-7">
                $125B+
              </h4>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                Annual Remittances
              </p>
            </div>
            <div className="mx-auto lg:mx-0 bg-secondary shadow-lg w-9/12 justify-center items-center flex flex-col py-4 rounded-lg border">
              <h4 className="text-[24px] text-primary font-bold leading-7">
                8%
              </h4>
              <p className="text-base leading-normal font-medium text-[#424242] mt-4">
                Annual GDP Growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full order-1 lg:order-2">
          <div>
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper rounded-xl"
            >
              <SwiperSlide className="">
                <div className="w-full">
                  <Image
                    src={"/assets/slide1.png"}
                    alt="cots"
                    className="w-full"
                    width={500}
                    height={1}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="w-full">
                  <Image
                    src={"/assets/slide2.png"}
                    alt="cots"
                    className="w-full"
                    width={500}
                    height={1}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
