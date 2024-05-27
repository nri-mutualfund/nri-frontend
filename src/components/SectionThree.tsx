import Image from "next/image";
import React, { useState } from "react";
import { TbAntennaBars5 } from "react-icons/tb";
import { FaCanadianMapleLeaf, FaArrowRight } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";
import {DataProps} from "../utility/type"
interface SectionOneProps {
  data: DataProps;
}
const SectionThree = ({data}:SectionOneProps) => {
  const [activeIndex, setIndex] = useState(0);
  const [expandIndex, setExpand] = useState(6);

  const images = [
    "/assets/money1.png",
    "/assets/deposit.png",
    "/assets/house.png",
    "/assets/saving.png",
    "/assets/bond.png",
  ];
  return (
    <section className=" px-4 md:px-20 lg:px-40 py-14 md:py-24 ">
      <div className="w-full lg:w-1/2">
        <h2 className="text-gray-800 mx-auto  font-medium  leading-[40px]">
          {data?.pre_heading}{" "}
          <span className="text-primary">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h2>
        <p className="text-sm font-light mt-1">{data?.detail}</p>
      </div>
      <div className="w-full flex flex-col gap-4 mt-8 lg:hidden">
        {data?.data?.map((item, index) => (
          <div key={index}>
            {expandIndex === index ? (
              <div
                className="w-full bg-[#F2F8F2] px-2 rounded-[20px] py-2"
                onClick={() => {
                  setExpand(6);
                }}
              >
                <div className="bg-white flex flex-col justify-between rounded-[20px] h-full">
                  <Image
                    src="/assets/long-term-wealth.png"
                    alt="Your Image Alt Text"
                    className="rounded-md w-full h-[200px] transition-all duration-300 hover:scale-105"
                    width={500}
                    height={1}
                  />
                  <div className=" py-10 px-4">
                    <p className="text-2xl font-medium">{item?.heading}</p>
                    <p className="mt-2 font-light text-sm">{item?.content}</p>
                    {item?.key_points?.split(", ").map((item1, index1) => (
                      <div
                        className="flex gap-2 items-center mt-4"
                        key={index1}
                      >
                        {index1 % 3 === 0 ? (
                          <TbAntennaBars5 />
                        ) : index1 % 3 === 1 ? (
                          <FaCanadianMapleLeaf />
                        ) : (
                          <PiShootingStarThin />
                        )}

                        <p className="text-sm font-light">{item1}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`flex gap-6 ${
                  index === 0 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center  w-90%  px-4 mx-2 py-4 rounded-lg ${
                  index === 0 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(index);
                }}
              >
                <Image
                  src={images[index]}
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className=" font-medium">{item?.heading}</p>
                  <p className="mt-2 font-light">{item?.short_description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-12 justify-between mt-8">
        <div className="w-full lg:w-[48%]  flex-col gap-4 hidden lg:flex">
          {data?.data?.map((item, index) => (
            <div
              key={index}
              className={`flex gap-10 w-full ${
                activeIndex === index ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                activeIndex === index ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(index);
              }}
            >
              <Image
                src={images[index]}
                alt="Your Image Alt Text"
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">{item?.heading}</p>
                <p className="mt-2 font-light text-sm">
                  {item?.short_description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[48%] bg-[#F2F8F2] px-6 rounded-[20px] py-6 hidden lg:block">
          <div className="bg-white flex flex-col gap-4 rounded-[20px] h-full">
            <Image
              src="/assets/long-term-wealth.png"
              alt="Your Image Alt Text"
              className="rounded-md w-full h-[200px]"
              width={500}
              height={1}
            />
            <div className="pt-4 px-6">
              <p className="text-2xl font-medium">
                {data?.data[activeIndex]?.heading}
              </p>
              <p className="mt-2 font-light text-sm">
                {data?.data[activeIndex]?.content}
              </p>
              {data?.data[activeIndex]?.key_points
                ?.split(", ")
                .map((item1, index1) => (
                  <div className="flex gap-2 items-center mt-4" key={index1}>
                    {index1 % 3 === 0 ? (
                      <TbAntennaBars5 />
                    ) : index1 % 3 === 1 ? (
                      <FaCanadianMapleLeaf />
                    ) : (
                      <PiShootingStarThin />
                    )}

                    <p className="text-sm font-light">{item1}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
