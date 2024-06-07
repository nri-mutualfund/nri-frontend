import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuFileType } from "react-icons/lu";
import { PiBankBold, PiChartLineUp } from "react-icons/pi";
import { DataProps } from "../utility/type";
interface SectionOneProps {
  data: DataProps;
}
const SectionTwo = ({ data }: SectionOneProps) => {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24 bg-secondary">
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-5 font-semibold text-[#424242] tracking-tight leading-tight">
              {data?.pre_heading}{" "}
              <span className="text-primary">{data?.highlightned}</span>{" "}
              {data?.post_heading}
            </h1>
            <p className="text-[#666666] font-light leading-normal mt-4 mb-4">{data?.detail}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 relative">
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  text-[#424242]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <FaHandHoldingDollar
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-medium text-[#424242]">
                  {data?.part1heading}</h2>
                </dt>
                <dd className="text-base leading-6  mt-[15px]">
                  <p className="font-normal text-[#424242]">
                  {data?.part1content}</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <PiChartLineUp
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-medium text-[#424242]">
                  {data?.part2heading}</h2>
                </dt>
                <dd className="text-base leading-6  mt-[15px]">
                <p className="font-normal text-[#424242]">
                  {data?.part2content}</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <PiBankBold
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-medium text-[#424242]">
                  {data?.part3heading}</h2>
                </dt>
                <dd className="text-base  mt-[15px]">
                <p className="font-normal text-[#424242]">
                  {data?.part3content}</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <LuFileType
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-medium text-[#424242]">
                  {data?.part4heading}</h2>
                </dt>
                <dd className="text-base leading-6  mt-[15px]">
                <p className="font-normal text-[#424242] ">
                  {data?.part4content}</p>
                </dd>
              </div>
              <div className="w-0.5 h-full bg-gray-300 absolute left-[50%] hidden lg:block"></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
