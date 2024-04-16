"use client";
import React, { useState } from "react";
import { TbDeviceMobileDown, TbAntennaBars5 } from "react-icons/tb";
import { FaRegUser, FaCanadianMapleLeaf } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { PiCurrencyDollarSimpleBold, PiShootingStarThin } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import DropdownMenu from "@/components/DropDown";
const Page = () => {
  const [menu, setMenu] = useState("Options");
  const options = ["How secure is this?"];
  const options2 = ["Is this actually legal?"];
  const options3 = ["What happens if Vested shuts down?"];
  const options4 = ["How can I verify ownership of the shares?"];
  const options5 = ["How will taxes work?"];
  const options6 = ["How does fractional investing work? "];

  return (
    <>
      {/* sectin 1 */}
      <section className="flex-col px-2 pt-16">
        <div className="flex justify-center align-middle py-14">
          <div className="text-center  w-[80%] md:w-2/3">
            <h1 className="text-gray-800 mx-auto text-7xl font-semibold ">
              The easiest and fastest way to{" "}
              <span className="text-primary">invest</span> in India
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className=" w-[80%] md:w-2/3 lg:w-1/3 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-gray-100 flex justify-between rounded-lg mt-3 w-[90%] md:w-1/2 lg:w-1/4  pl-4 pr-2 py-2">
            <input
              className="bg-transparent text-black placeholder-black outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="flex flex-wrap px-4 md:px-20 lg:px-40 gap-20 lg:gap-0  justify-between mt-24">
        <div className="w-full lg:w-[48%]">
          <h1 className="text-gray-800 mx-auto text-[64px] font-bold ">
            A one-stop <span className="text-primary">Indian</span> Expacts
          </h1>
          <p className=" text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
          <div className="flex gap-4 mt-3 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <TbDeviceMobileDown />
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Invest reliably with index funds
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-3 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <FaRegUser />
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Earn high returns with India’s growth
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-3 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <RiBankFill />
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Faster account opening processes with trusted banks
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-3 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <PiCurrencyDollarSimpleBold />
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Invest reliably with index funds
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[48%] bg-green-100 flex items-center px-4 rounded-[20px] py-20 md:py-40 ">
          <Image
            src="/assets/investcoin.png"
            alt="Your Image Alt Text"
            className="rounded-md w-full  transition-all duration-300 hover:scale-105"
            width={500}
            height={1}
          />
        </div>
      </section>
      {/* section 3 */}
      <section className="flex flex-col justify-center mt-24 px-4 md:px-20 lg:px-40">
        <h1 className="text-gray-800 mx-auto text-7xl font-semibold ">
          Serving <span className="text-primary">NRI</span> from across
          countries
        </h1>
        <Image
          src="/assets/world.png"
          alt="Your Image Alt Text"
          className="rounded-md"
          width={1454}
          height={604}
        />
      </section>
      {/* section 4 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <h1 className="text-gray-800 mx-auto text-[64px] font-bold ">
          Product <span className="text-primary">We offer</span>
        </h1>
        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-10">
          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <div className="flex gap-10 w-full bg-[#F2F8F2] items-center px-8 py-4 rounded-lg drop-shadow-sm">
              <Image
                src="/assets/money1.png"
                alt="Your Image Alt Text"
                className="w-[80px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Mutual Funds</p>
                <p className="mt-6 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div className="flex gap-10 w-full bg-[#F7F6F4] items-center px-8 py-4 rounded-lg drop-shadow-sm">
              <Image
                src="/assets/deposit.png"
                alt="Your Image Alt Text"
                className="w-[80px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Fixed Deposits</p>
                <p className="mt-6 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div className="flex gap-10 w-full bg-[#F7F6F4] items-center px-8 py-4 rounded-lg drop-shadow-sm">
              <Image
                src="/assets/house.png"
                alt="Your Image Alt Text"
                className="w-[80px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Commercial Real Estate</p>
                <p className="mt-6 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div className="flex gap-10 w-full bg-[#F7F6F4] items-center px-8 py-4 rounded-lg drop-shadow-sm">
              <Image
                src="/assets/saving.png"
                alt="Your Image Alt Text"
                className="w-[80px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">PMS</p>
                <p className="mt-6 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div className="flex gap-10 w-full bg-[#F7F6F4] items-center px-8 py-4 rounded-lg drop-shadow-sm">
              <Image
                src="/assets/bond.png"
                alt="Your Image Alt Text"
                className="w-[80px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Bond</p>
                <p className="mt-6 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#F2F8F2] px-4 rounded-[20px] py-4">
            <div className="bg-white flex flex-col justify-between rounded-[20px]">
              <Image
                src="/assets/long-term-wealth.png"
                alt="Your Image Alt Text"
                className="rounded-md w-full transition-all duration-300 hover:scale-105"
                width={500}
                height={1}
              />
              <div className=" py-10 px-4">
                <p className="text-xl font-medium">Mutual Funds</p>
                <p className="mt-2 font-light text-sm">
                  A personalised mutual funds portfolio, diversified across
                  equity, debt and gold for long- term growth.
                </p>
                <div className="flex gap-2 items-center mt-4">
                  <TbAntennaBars5 />

                  <p className="text-sm font-light">
                    10-12% with active growth
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <FaCanadianMapleLeaf />

                  <p className="text-sm font-light">
                    7+ years recommended duration
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <PiShootingStarThin />

                  <p className="text-sm font-light">No lock-in</p>
                </div>
              </div>
              <div className=" flex justify-center items-center w-full pb-10">
                <button className="w-[80%] flex justify-center items-center gap-3 py-2 text-sm font-medium text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  Explore
                  <GoArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <h1 className="text-gray-800 text-[64px] font-bold w-full lg:w-1/2">
          Open <span className="text-primary">NRI Bank Account </span>in India
          Product
        </h1>
        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-10">
          <div className="w-full lg:w-[40%]">
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
              mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
            </p>
            <div className="flex flex-wrap mt-6">
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-8 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>1</p>
                </div>
                <p className="font-light">RBI registered banks</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-8 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>2</p>
                </div>
                <p className="font-light">Robust Netbanking</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-8 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>3</p>
                </div>
                <p className="font-light">Earn attractive interest rate*</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-8 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>4</p>
                </div>
                <p className="font-light">Withdraw Anytime</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="flex justify-between">
              <Image
                src="/assets/central_bank.png"
                alt="Your Image Alt Text"
                className="w-[80%] md:w-full scale-100 lg:scale-125"
                width={2000}
                height={1}
              />
              <div className="flex flex-col gap-4 z-10">
                <Image
                  src="/assets/axis_bank.png"
                  alt="Your Image Alt Text"
                  className="w-[200px] rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/sbi_bank.png"
                  alt="Your Image Alt Text"
                  className="w-[200px] rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/yes_bank.png"
                  alt="Your Image Alt Text"
                  className="w-[200px] rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-gray-800 mx-auto text-[64px] font-bold">
            <span className="text-primary">NRI</span> Services
          </h1>
        </div>

        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-10">
          <div className="w-full lg:w-[45%] bg-[#F2F8F2]  rounded-[20px]">
            <div className="py-14 pl-14 pr-20">
              <p className="text-xl font-medium">Taxation</p>

              <p className="font-medium text-sm text-gray-500 mt-10">
                Personalized consultations with{" "}
                <span className="text-black">NRI-specialized </span>
                taxation experts
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                File ITRs hassle-free & maximize the refunds
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                Apply for <span className="text-black">15CA & CB</span> & Make
                your (NRO-NRE) transfers stress-free
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                <span className="text-black">
                  {" "}
                  Apply for Lower TDS certificates
                </span>{" "}
                & Reduce TDS deductions on property sales
              </p>
              <p className="font-medium text-sm text-black mt-3">
                {`Received an Income Tax Notice? Don't worry, we're here to help`}
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                Gain More, Pay Less: Top-notch Capital Gain Tax Planning
              </p>
            </div>
            <div className="flex justify-between pl-14">
              <p className="text-lg font-medium">Download</p>
              <Image
                src="/assets/tax.png"
                alt="Your Image Alt Text"
                className="w-[150px]"
                width={500}
                height={1}
              />
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-[#F2F8F2]  rounded-[20px]">
            <div className="py-14 pl-14 pr-20">
              <p className="text-xl font-medium">Documentation</p>

              <p className="font-medium text-sm text-gray-500 mt-10">
                Personalized consultations with{" "}
                <span className="text-black">NRI-specialized </span>
                taxation experts
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                File ITRs hassle-free & maximize the refunds
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                Apply for <span className="text-black">15CA & CB</span> & Make
                your (NRO-NRE) transfers stress-free
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                <span className="text-black">
                  {" "}
                  Apply for Lower TDS certificates
                </span>{" "}
                & Reduce TDS deductions on property sales
              </p>
              <p className="font-medium text-sm text-black mt-3">
                {`Received an Income Tax Notice? Don't worry, we're here to help`}
              </p>
              <p className="font-medium text-sm text-gray-500 mt-3">
                Gain More, Pay Less: Top-notch Capital Gain Tax Planning
              </p>
            </div>
            <div className="flex justify-between pl-14">
              <p className="text-lg font-medium">Download</p>
              <Image
                src="/assets/doc.png"
                alt="Your Image Alt Text"
                className="w-[150px]"
                width={500}
                height={1}
              />
            </div>
          </div>
        </div>
      </section>
      {/* {section 7} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-gray-800 mx-auto text-[64px] font-bold">
            What <span className="text-primary">Customers</span> have to say
          </h1>
        </div>

        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between my-10">
          <div className="w-full lg:w-[48%] bg-[#F2F8F2]  rounded-[20px] flex gap-10">
            <Image
              src="/assets/customer1.png"
              alt="Your Image Alt Text"
              className="w-1/2 transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <p>Tonia Smart</p>
            </div>
          </div>

          <div className="w-full lg:w-[48%] bg-[#F2F8F2]  rounded-[20px] flex gap-10">
            <Image
              src="/assets/customer2.png"
              alt="Your Image Alt Text"
              className="w-1/2 transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <p>Grace Obi</p>
            </div>
          </div>
        </div>
      </section>
      {/* {section 8} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-40">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-gray-800 mx-auto text-[30px] font-extralight">
            FAQ
          </h3>
          <p className="font-extralight mt-4">
            Learn about us and check out these frequently asked questions.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 mt-10">
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options} />
          </div>
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options2} />
          </div>
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options3} />
          </div>
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options4} />
          </div>
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options5} />
          </div>
          <div className="w-full md:w-[45%] text-right ">
            <DropdownMenu options={options6} />
          </div>
        </div>
      </section>
      {/* {section 9} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-40  mb-40">
        <div className="w-full bg-[#F2F8F2] px-4 rounded-[20px] py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 w-[80%] mx-auto">
            <Image
              src="/assets/bg_circle.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="w-[80%] lg:w-[70%] mx-auto relative z-10">
            <h1 className="text-gray-800 mx-auto text-[50px] font-bold text-center">
              Get in touch <span className="text-primary">NRI website</span> and
              invest in your future Product
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
