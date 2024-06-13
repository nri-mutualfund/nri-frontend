import Image from "next/image";
import React, { useState } from "react";
import { IoBarChartOutline, IoLockOpenOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BsHouseCheck, BsGraphUpArrow } from "react-icons/bs";
import { DataProps } from "../utility/type";
import { MdSavings } from "react-icons/md";
import { HiOutlineDocumentMinus } from "react-icons/hi2";

interface SectionOneProps {
  data: DataProps;
}
const SectionThree = ({ data }: SectionOneProps) => {
  const [activeIndex, setIndex] = useState(0);
  const [expandIndex, setExpand] = useState(6);

  const images = [
    "/assets/money1.png",
    "/assets/deposit.png",
    "/assets/house.png",
    "/assets/saving.png",
    "/assets/bond.png",
  ];
  const icons = [
    { icon: <MdSavings size={40} color="#008000" /> },
    { icon: <BsHouseCheck size={40} color="#008000" /> },
    { icon: <RiLuggageDepositLine size={40} color="#008000" /> },
    { icon: <BsGraphUpArrow size={40} color="#008000" /> },
    { icon: <HiOutlineDocumentMinus size={40} color="#008000" /> },
  ];
  return (
    <section className=" px-4 md:px-20 lg:px-40 py-14 md:py-24 ">
      <div className="w-full lg:w-1/2">
        <h1 className="">
          {data?.pre_heading}{" "}
          <span className="text-text_dark">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h1>
        <h5 className="mt-4 mb-4">{data?.detail}</h5>
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
                    <h3 className="">{item?.heading}</h3>
                    <h4 className="">{item?.content}</h4>
                    {item?.key_points?.split(", ").map((item1, index1) => (
                      <div
                        className="flex gap-2 items-center mt-4"
                        key={index1}
                      >
                        {index1 % 3 === 0 ? (
                          <IoBarChartOutline />
                        ) : index1 % 3 === 1 ? (
                          <GiSandsOfTime />
                        ) : (
                          <IoLockOpenOutline />
                        )}

                        <h5 className="text-sm">{item1}</h5>
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
                {icons[index]?.icon}
                <div className="">
                  <h3 className="">{item?.heading}</h3>
                  <h4 className="">{item?.short_description}</h4>
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
              {icons[index]?.icon}
              <div className="">
                <h3 className="">{item?.heading}</h3>
                <h4 className="">{item?.short_description}</h4>
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
              <h3 className="">{data?.data[activeIndex]?.heading}</h3>
              <h4 className="">{data?.data[activeIndex]?.content}</h4>
              {data?.data[activeIndex]?.key_points
                ?.split(", ")
                .map((item1, index1) => (
                  <div className="flex gap-2 items-center mt-4" key={index1}>
                    {index1 % 3 === 0 ? (
                      <IoBarChartOutline />
                    ) : index1 % 3 === 1 ? (
                      <GiSandsOfTime />
                    ) : (
                      <IoLockOpenOutline />
                    )}

                    <h4 className="text-sm">{item1}</h4>
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
