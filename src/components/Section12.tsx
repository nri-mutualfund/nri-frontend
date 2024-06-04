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
    <section className=" px-4 md:px-20 lg:px-40  py-14 md:py-24 lg:py-32 bg-secondary">
      <div className="grid grid-cols-1 gap-x-20 gap-y-16 mt-4 lg:grid-cols-2 items-center">
        <div className="w-full">
          <h1 className="text-gray-800  font-bold  max-w-sm leading-[55px]">
            Why you should <span className="text-primary">invest</span> in
            India?
          </h1>
          <div className="flex gap-14 items-start mt-14">
            <div>
              <h2 className="text-primary font-bold leading-10">$4 Trillion</h2>
              <p className="text-base leading-6 font-medium text-[#333] mt-4">
                5th Largest Economy
              </p>
            </div>
            <div>
              <h2 className="text-primary font-bold leading-10">$125B+</h2>
              <p className="text-base leading-6 font-medium text-[#333] mt-4">
                Annual Remittances
              </p>
            </div>
            <div>
              <h2 className="text-primary font-bold leading-10">8%</h2>
              <p className="text-base leading-6 font-medium text-[#333] mt-4">
                Annual GDP Growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
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
