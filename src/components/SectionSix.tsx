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
import { DataProps } from "../utility/type";
interface SectionOneProps {
  data: DataProps;
}
const SectionSix = ({ data }: SectionOneProps) => {
  const swiperRef = useRef() as any;

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
  const createArrayOfLength = (length: number): number[] => {
    return Array.from({ length }, (_, i) => i + 1);
  };
  return (
    <section className="px-4 md:px-20 lg:px-10 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[#424242] tracking-tight leading-tight">
          {data?.pre_heading}{" "}
          <span className="text-[#424242]">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h1>
        <p className="text-[#666666] font-light leading-normal mt-4 mb-4">
          {data?.detail}
        </p>
      </div>
      <div className="pt-14 md:pt-24">
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
                className="mySwiper rounded-xl"
              >
                {data?.data?.map((item, index) => (
                  <SwiperSlide className=" bg-white " key={index}>
                    <div className="bg-white rounded-xl border-2 py-12 px-6">
                      <div
                        className={`max-h-[350px] min-h-[350px] flex flex-col justify-between`}
                      >
                        <div>
                          <Image
                            src={"/assets/cords.png"}
                            alt="cots"
                            className="w-[20px]"
                            width={500}
                            height={1}
                          />
                          <p className="font-light mt-4 text-[#424242]">
                            {item?.content.length < 200
                              ? item?.content
                              : `${item?.content
                                  .toString()
                                  .substring(0, 200)}...`}
                          </p>
                        </div>

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
                            <p className="font-medium text-[#424242]">
                              {item?.author_name}
                            </p>
                            <p className="font-medium text-[#666]  ">
                              {item?.hobby}
                            </p>
                            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg  lg:overflow-visible mt-1">
                              <div className="inline-flex items-center">
                                {createArrayOfLength(Number(item.rating))?.map(
                                  (item, index1) => (
                                    <span key={index1}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-yellow-500 cursor-pointer"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  )
                                )}
                                {createArrayOfLength(
                                  5 - Number(item.rating)
                                )?.map((item1, index1) => (
                                  <span key={index1}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-5 h-5 cursor-pointer text-gray-300"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                      ></path>
                                    </svg>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
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
      </div>
      {/* <div className="flex justify-center ">
      <button className="bg-primary hidden md:block text-white px-16 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        View All
      </button>
    </div> */}
    </section>
  );
};

export default SectionSix;
