import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <section className="px-4 md:px-20 lg:px-40 bg-secondary py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="">
          Your money will be{" "}
          <span className="text-text_dark">safe & secure</span>
        </h1>
        <h4 className="mt-4 mb-4">
          Your money is regulated by mutual fund companies. NRI doesn’t keep or
          handle your money
        </h4>
      </div>

      <div className="flex flex-wrap  gap-4 md:gap-0   justify-between  items-start mt-10">
        <div className="w-full md:w-[25%] flex sm:flex-row md:flex-col gap-4 justify-center items-center ">
          <div className="md:h-[180px] w-[50%] md:w-full">
            <Image
              src="/assets/dollar.png"
              alt="Your Image Alt Text"
              className="w-full lg:w-[70%] transition-all duration-300 hover:scale-105 mx-auto"
              width={500}
              height={1}
            />
          </div>

          <div className="flex md:justify-center md:items-center flex-col gap-3">
            <h3 className="md:text-center">From your Foreign Bank</h3>
            <p className="font-normal md:text-center leading-6 text-text_light">
              Convert to INR through your preferred remittance partner
            </p>
          </div>
        </div>
        <div className="w-[30%]  md:w-[12.5%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
          <div className="border-gray-700 border-2 w-1 h-[50px] md:h-1 md:w-[35%] border-dashed" />
          <Image
            src="/assets/lock.png"
            alt="Your Image Alt Text"
            className="w-[50px] transition-all duration-300 hover:scale-105"
            width={500}
            height={1}
          />
          <div className="border-gray-700 border-2 w-1 h-[50px] md:h-1 md:w-[35%] border-dashed" />
        </div>
        <div className="w-full md:w-[25%] flex sm:flex-row md:flex-col gap-4 justify-center items-center ">
          <div className="md:h-[180px] w-[50%] md:w-full">
            <Image
              src="/assets/currency.png"
              alt="Your Image Alt Text"
              className="w-[90%] lg:w-[60%] transition-all duration-300 hover:scale-105 mx-auto"
              width={500}
              height={1}
            />
          </div>
          <div className="flex md:justify-center md:items-center flex-col gap-3">
            <h3 className="md:text-center">To NRE/NRO Account</h3>
            <h5 className="md:text-center">
              Integrate bank account and pay through net-banking
            </h5>
          </div>
        </div>
        <div className="w-[30%] md:w-[12.5%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
          <div className="border-gray-700 border-2 w-1 h-[50px] md:h-1 md:w-[35%] border-dashed" />
          <Image
            src="/assets/shield.png"
            alt="Your Image Alt Text"
            className="w-[50px] transition-all duration-300 hover:scale-105"
            width={500}
            height={1}
          />
          <div className="border-gray-700 border-2 w-1 h-[50px] md:h-1 md:w-[35%] border-dashed" />
        </div>
        <div className="w-full md:w-[25%] flex sm:flex-row md:flex-col gap-4 justify-center items-center">
          <div className="md:h-[180px] w-[50%] md:w-full">
            <Image
              src="/assets/funds.png"
              alt="Your Image Alt Text"
              className="w-[70%] lg:w-[60%] transition-all duration-300 hover:scale-105 mx-auto"
              width={500}
              height={1}
            />
          </div>
          <div className="flex md:justify-center md:items-center flex-col gap-3">
            <h3 className="md:text-center">To Mutual Funds</h3>
            <h5 className="md:text-center">
              Invest directly in your selected mutual funds
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
