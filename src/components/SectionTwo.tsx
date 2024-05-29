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
            <h2 className="mt-2 font-bold tracking-tight text-[#333]">
              {data?.pre_heading}{" "}
              <span className="text-primary">{data?.highlightned}</span>{" "}
              {data?.post_heading}
            </h2>
            <p className="mt-1 text-xs text-black font-light">{data?.detail}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 relative">
              <div className="relative pl-16">
                <dt className="text-2xl font-medium leading-8 text-[#555]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <FaHandHoldingDollar
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part1heading}
                </dt>
                <dd className="text-base leading-6 text-black mt-6">
                  {data?.part1content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium leading-8 text-[#555]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <PiChartLineUp
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part2heading}
                </dt>
                <dd className="text-base leading-6 text-black mt-6">
                  {data?.part2content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium leading-8 text-[#555]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <PiBankBold
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part3heading}
                </dt>
                <dd className="text-base leading-6 text-black mt-6">
                  {data?.part3content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium leading-8 text-[#555]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <LuFileType
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part4heading}
                </dt>
                <dd className="text-base leading-6 text-black mt-6">
                  {data?.part4content}
                </dd>
              </div>
              <div className="w-0.5 h-full bg-gray-300 absolute left-[50%]"></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
