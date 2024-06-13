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
            <h1>
              {data?.pre_heading}{" "}
              <span className="text-text_dark">{data?.highlightned}</span>{" "}
              {data?.post_heading}
            </h1>
            <h4 className="mt-4 mb-4">{data?.detail}</h4>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 relative">
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  text-text_dark">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer">
                    <FaHandHoldingDollar
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="">{data?.part1heading}</h3>
                </dt>
                <dd className="text-base leading-6  mt-[15px]">
                  <h5 className="">{data?.part1content}</h5>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer">
                    <PiChartLineUp
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="">{data?.part2heading}</h3>
                </dt>
                <dd className="text-base leading-6  mt-[15px]">
                  <h5 className="">{data?.part2content}</h5>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer">
                    <PiBankBold
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="">{data?.part3heading}</h3>
                </dt>
                <dd className="mt-[15px]">
                  <h5 className="">{data?.part3content}</h5>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-2xl font-medium  ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer">
                    <LuFileType
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="">{data?.part4heading}</h3>
                </dt>
                <dd className="mt-[15px]">
                  <h5 className="pt-1">{data?.part4content}</h5>
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
