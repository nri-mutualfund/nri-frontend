import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <section className="px-4 md:px-20 lg:px-40 bg-secondary py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
      <h1 className=" font-semibold text-[#424242]  leading-tight text-center">
          Your money will be <span className="text-[#424242]">safe & secure</span>
        </h1>
        <p className="text-[#666666] font-normal leading-normal mt-4 mb-4 text-center">
                    Your money is regulated by mutual fund companies. NRI doesn’t keep or
          handle your money
        </p>
      </div>

      <div className="flex flex-wrap  gap-4 md:gap-0   justify-between  items-start mt-10">
        <div className="w-full md:w-[20%] flex sm:flex-row md:flex-col gap-4 justify-center items-center ">
          <Image
            src="/assets/dollar.png"
            alt="Your Image Alt Text"
            className="w-[30%] lg:w-[70%] transition-all duration-300 hover:scale-105"
            width={500}
            height={1}
          />
          <div className="flex justify-center md:items-center flex-col gap-3">
                  <h2 className="font-medium text-[#424242]">
          From your Foreign Bank{" "}
            </h2>
            <p className=" font-normal md:text-center leading-6 w-full md:w-full">
              Convert to INR through your preferred remittance partner
            </p>
          </div>
        </div>
        <div className="w-[30%]  md:w-[20%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
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
        <div className="w-full md:w-[20%] flex sm:flex-row md:flex-col gap-4 justify-center items-center ">
          <Image
            src="/assets/currency.png"
            alt="Your Image Alt Text"
            className=" w-[28%] lg:w-[60%] transition-all duration-300 hover:scale-105"
            width={500}
            height={1}
          />
          <div className=" flex justify-center md:items-center flex-col gap-3">
                  <h2 className="font-medium text-[#424242]">
          To NRE/NRO Account</h2>
            <p className=" font-normal md:text-center leading-6 w-full md:w-full">
              Integrate bank account and pay through net-banking
            </p>
          </div>
        </div>
        <div className="w-[30%] md:w-[20%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
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
        <div className="w-full md:w-[20%] flex sm:flex-row md:flex-col gap-4 justify-center items-center">
          <Image
            src="/assets/funds.png"
            alt="Your Image Alt Text"
            className="w-[30%] lg:w-[60%] transition-all duration-300 hover:scale-105"
            width={700}
            height={1}
          />
          <div className="flex justify-center md:items-center flex-col gap-3 pt-3">
                  <h2 className="font-medium text-[#424242]">
          To Mutual Funds
            </h2>
            <p className=" font-normal md:text-center leading-6 w-full ">
              Invest directly in your selected mutual funds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
