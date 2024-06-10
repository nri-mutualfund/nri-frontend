import React from "react";
import Image from "next/image";
import { TbAntennaBars5, TbReceiptTax } from "react-icons/tb";
import { PiShootingStarThin, PiCertificate } from "react-icons/pi";
import { VscGitStashApply } from "react-icons/vsc";
import { CgFileDocument } from "react-icons/cg";
import { DataProps } from "../utility/type";
interface SectionOneProps {
  data: DataProps;
}
const SectionFive = ({ data }: SectionOneProps) => {
  const icons = [
    { icon: <PiShootingStarThin size={20} color="#555" /> },
    { icon: <TbAntennaBars5 size={20} color="#555" /> },
    { icon: <VscGitStashApply size={20} color="#555" /> },
    { icon: <PiCertificate size={20} color="#555" /> },
    { icon: <TbReceiptTax size={20} color="#555" /> },
    { icon: <CgFileDocument size={20} color="#555" /> },
  ];
  return (
    <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[#424242]  font-semibold  leading-tight max-w-80">
          {data?.pre_heading}
          <span className="text-[#424242]">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h1>
        <p className="font-normal text-center leading-normal mt-4 mb-4 text-[#666]">
          {data?.detail}
        </p>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-14 mx-auto mt-10">
        <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
          <div className="flex flex-row items-center justify-between pl-12 pr-6 pt-10">
            <div className="flex justify-start">
              <h2 className="text-[#424242] font-medium mt-2 ">
                {data?.title_one}
              </h2>
            </div>
            <Image
              src="/assets/tax.png"
              alt="Your Image Alt Text"
              className="w-[50px] "
              width={500}
              height={1}
            />
          </div>
          <div className=" pl-12 pr-20 pb-12">
            {data?.content_one?.map((item, index) => (
              <div key={index} className="flex items-center mt-4 relative">
                <div className="w-12 absolute left-0">{icons[index].icon}</div>
                <p className=" text-[#424242] ml-10  font-normal leading-5">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
          <div className="flex flex-row items-center justify-between pl-12 pr-6 pt-10">
            <div className="flex justify-start">
              <h2 className="text-[#424242] font-medium mt-2 ">
                {data?.title_two}
              </h2>
            </div>
            <Image
              src="/assets/doc.png"
              alt="Your Image Alt Text"
              className="w-[50px] "
              width={500}
              height={1}
            />
          </div>

          <div className=" pl-12 pr-20 pb-12">
            {data?.content_two?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index !== 0 && index !== 5 ? "mt-8" : "mt-4"
                } relative`}
              >
                <div className="w-112 absolute left-0">{icons[index].icon}</div>
                <p className=" text-[#424242]  font-normal ml-10 leading-5">
                  {item}
                </p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
