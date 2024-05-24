import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuFileType } from "react-icons/lu";
import { PiBankBold, PiChartLineUp } from "react-icons/pi";
import {DataProps} from "../utility/type"
interface SectionOneProps {
  data: DataProps;
}
const SectionTwo = ( {data}:SectionOneProps) => {
  const features = [
    {
      name: "Invest reliably with index funds",
      description:
        "Invest reliably with index funds: Build wealth over time by subscribing to our curated portfolio of equity & debt instruments. Relax and focus on other important things in life",
      icon: FaHandHoldingDollar,
    },
    {
      name: "Earn high returns with India’s growth",
      description:
        "Earn high returns with India’s growth: With its young talent and growing urban class, India is poised to be one of the fastest growing economies in the next decade. We offer a seamless way for this growth to reflect in your asset portfolio.",
      icon: PiChartLineUp,
    },
    {
      name: "Faster account opening processes with trusted banks",
      description:
        "Faster account opening processes with trusted banks:** Invest with us and open a NRE/NRO bank account with top banks like ICICI, Axis, Yes in few days. No more waiting for weeks just to get started.",
      icon: PiBankBold,
    },
    {
      name: "Complimentary tax guidance",
      description:
        "Complimentary tax guidance: Investing in a foreign market can be complicated, especially when it comes to taxation. Use our simple and tax-compliant platform to invest with confidence.",
      icon: LuFileType,
    },
  ];
  return (
    <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24 bg-secondary">
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-2 font-medium tracking-tight text-gray-900">
            {data?.pre_heading} <span className="text-primary">{data?.highlightned}</span> {data?.post_heading}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
            {data?.detail}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-medium leading-5 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    {/* <Image src={feature.icon} alt={feature.name} className="h-10 w-10 text-white" aria-hidden="true" /> */}
                    <FaHandHoldingDollar
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part1heading}
                </dt>
                <dd className="text-sm text-base text-gray-600 mt-6">
                  {data?.part1content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-medium leading-5 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    {/* <Image src={feature.icon} alt={feature.name} className="h-10 w-10 text-white" aria-hidden="true" /> */}
                    <PiChartLineUp
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part2heading}
                </dt>
                <dd className="text-sm text-base text-gray-600 mt-6">
                  {data?.part2content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-medium leading-5 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    {/* <Image src={feature.icon} alt={feature.name} className="h-10 w-10 text-white" aria-hidden="true" /> */}
                    <PiBankBold
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part3heading}
                </dt>
                <dd className="text-sm text-base text-gray-600 mt-6">
                  {data?.part3content}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-medium leading-5 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center  bg-primary justify-center rounded-lg  cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    {/* <Image src={feature.icon} alt={feature.name} className="h-10 w-10 text-white" aria-hidden="true" /> */}
                    <LuFileType
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {data?.part4heading}
                </dt>
                <dd className="text-sm text-base text-gray-600 mt-6">
                  {data?.part4content}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
