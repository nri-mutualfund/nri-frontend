"use client";
import React, { useState } from "react";
import { TbDeviceMobileDown, TbAntennaBars5 } from "react-icons/tb";
import { FaRegUser, FaCanadianMapleLeaf } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { PiCurrencyDollarSimpleBold, PiShootingStarThin } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import FAQ from "@/components/FAQ";
const Page = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const products = [
    "Mutual Funds",
    "Fixed Deposits",
    "Commercial Real Estate",
    "PMS",
    "Bond",
  ];
  const options = "How secure is this?";
  const options2 = "Is this actually legal?";
  const options3 = "What happens if Vested shuts down?";
  const options4 = "How can I verify ownership of the shares?";
  const options5 = "How will taxes work?";
  const options6 = "How does fractional investing work? ";
  const details =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* sectin 1 */}
      <Image
        src="/assets/circle.png"
        alt="Your Image Alt Text"
        className="w-[120px] lg:w-[150px] absolute right-0 top-32"
        width={500}
        height={1}
      />
      <section className="flex-col px-2 pt-16">
        <div className="flex justify-center align-middle pt-14">
          <div className="text-center  w-[90%] md:w-2/3 lg:w-[40%]">
            <h1 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[50px]">
              The easiest and fastest way to{" "}
              <span className="text-primary">Invest</span> in India
            </h1>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <p className=" w-[80%] md:w-2/3 lg:w-1/3 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div> */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary text-white px-16 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            {" "}
            Get Started
          </button>
        </div>
      </section>

      {/* section 2 */}
      <section className="flex flex-wrap px-4 md:px-20 lg:px-40 gap-20 lg:gap-0  justify-between mt-24">
        <div className="w-full lg:w-[45%]">
          <h1 className="text-gray-800 font-semibold w-full lg:w-[80%] font-graphik leading-[50px]">
            A one-stop <span className="text-primary">Indian</span> Expacts
          </h1>

          <p className="text-sm font-light my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
          <div className="flex gap-4 mt-6 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <TbDeviceMobileDown />
            </div>
            <div>
              <h3 className="font-semibold leading-[24px]">
                Invest reliably with index funds
              </h3>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <FaRegUser />
            </div>
            <div>
              <h3 className=" font-semibold">
                Earn high returns with India’s growth
              </h3>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <RiBankFill />
            </div>
            <div>
              <h3 className="font-semibold leading-[24px]">
                Faster account opening processes with trusted banks
              </h3>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6 items-start">
            <div className="text-primary bg-green-100 rounded-full text-4xl p-4">
              <PiCurrencyDollarSimpleBold />
            </div>
            <div>
              <h3 className="font-semibold leading-[24px]">
                Invest reliably with index funds
              </h3>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                mollis aenean sit dictum tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-[52%] h-[600px] lg:h-auto max-h-full">
          <Image
            src="/assets/investcoin.png"
            alt="Your Image Alt Text"
            className="rounded-md transition-all duration-300 hover:scale-105"
            fill
          />
        </div>
      </section>
      {/* section 3 */}
      <section className="flex flex-col justify-center mt-24 px-4 md:px-20 lg:px-40">
        <h1 className="text-gray-800 mx-auto font-semibold font-graphik leading-[50px]">
          Serving <span className="text-primary">NRI</span> from across
          countries
        </h1>
        <Image
          src="/assets/world.png"
          alt="Your Image Alt Text"
          className="rounded-md mt-10"
          width={1454}
          height={604}
        />
      </section>
      {/* section 4 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <h1 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[50px]">
          Product <span className="text-primary">We offer</span>
        </h1>
        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-8">
          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <div
              // className=`flex gap-10 w-full indexbg-[#F2F8F2] items-center px-8 py-4 rounded-lg drop-shadow-sm`
              className={`flex gap-10 w-full ${
                index === 0 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                index === 0 ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(0);
              }}
            >
              <Image
                src="/assets/money1.png"
                alt="Your Image Alt Text"
                className="w-[60px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Mutual Funds</p>
                <p className="mt-2 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div
              className={`flex gap-10 w-full ${
                index === 1 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                index === 1 ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(1);
              }}
            >
              <Image
                src="/assets/deposit.png"
                alt="Your Image Alt Text"
                className="w-[60px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Fixed Deposits</p>
                <p className="mt-2 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div
              className={`flex gap-10 w-full ${
                index === 2 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                index === 2 ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(2);
              }}
            >
              <Image
                src="/assets/house.png"
                alt="Your Image Alt Text"
                className="w-[60px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Commercial Real Estate</p>
                <p className="mt-2 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div
              className={`flex gap-10 w-full ${
                index === 3 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                index === 3 ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(3);
              }}
            >
              <Image
                src="/assets/saving.png"
                alt="Your Image Alt Text"
                className="w-[60px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">PMS</p>
                <p className="mt-2 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
            <div
              className={`flex gap-10 w-full ${
                index === 4 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
              } items-center px-8 py-4 rounded-lg ${
                index === 4 ? "drop-shadow-sm" : "drop-shadow-lg"
              }`}
              onMouseEnter={() => {
                setIndex(4);
              }}
            >
              <Image
                src="/assets/bond.png"
                alt="Your Image Alt Text"
                className="w-[60px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-2xl font-medium">Bond</p>
                <p className="mt-2 font-light">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#F2F8F2] px-4 rounded-[20px] py-4">
            <div className="bg-white flex flex-col justify-between rounded-[20px] h-full">
              <Image
                src="/assets/long-term-wealth.png"
                alt="Your Image Alt Text"
                className="rounded-md w-full h-[200px] transition-all duration-300 hover:scale-105"
                width={500}
                height={1}
              />
              <div className=" py-10 px-4">
                <p className="text-3xl font-medium">{products[index]}</p>
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
      <section className=" px-4 md:px-20 lg:px-40 mt-32">
        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-4">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-gray-800  font-semibold font-graphik leading-[50px]">
              Open <span className="text-primary">NRI Bank Account </span>in
              India
            </h1>
            <p className="font-light mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
              mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
            </p>
            <div className="flex flex-wrap mt-2">
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-6 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>1</p>
                </div>
                <p className="font-light">RBI registered banks</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-6 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>2</p>
                </div>
                <p className="font-light">Robust Netbanking</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-6 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>3</p>
                </div>
                <p className="font-light">Earn attractive interest rate*</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex gap-8 mt-6 items-center">
                <div className="text-primary bg-green-100 rounded-full text-4xl flex justify-center h-14 w-14 items-center font-bold">
                  <p>4</p>
                </div>
                <p className="font-light">Withdraw Anytime</p>
              </div>
              <div className=" flex  items-start w-full mt-10">
                <button className="px-8  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] ">
            <div className="flex justify-between items-center">
              <Image
                src="/assets/central_bank.png"
                alt="Your Image Alt Text"
                className="w-full"
                width={2000}
                height={1}
              />
              {/* <div className="flex flex-col gap-4 z-10 w-[20%]">
                <Image
                  src="/assets/axis_bank.png"
                  alt="Your Image Alt Text"
                  className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/sbi_bank.png"
                  alt="Your Image Alt Text"
                  className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/yes_bank.png"
                  alt="Your Image Alt Text"
                  className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/axis_bank.png"
                  alt="Your Image Alt Text"
                  className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/sbi_bank.png"
                  alt="Your Image Alt Text"
                  className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  width={500}
                  height={1}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-32">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-gray-800 mx-auto  font-semibold font-graphik">
            <span className="text-primary">NRI</span> Services
          </h1>
        </div>

        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between mt-10">
          <div className="w-full lg:w-[45%] bg-[#F2F8F2]  rounded-[20px]">
            <div className="py-8 pl-14 pr-20">
              <p className="text-[30px] font-medium">Taxation</p>

              <p className="font-medium text-sm text-gray-500 mt-4">
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
              <a
                className="text-lg font-medium"
                download={true}
                href="/assets/resume.pdf"
              >
                Download
              </a>
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
            <div className="py-8 pl-14 pr-20">
              <p className="text-[30px] font-medium">Documentation</p>

              <p className="font-medium text-sm text-gray-500 mt-4">
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
              <a
                className="text-lg font-medium"
                download={true}
                href="/assets/resume.pdf"
              >
                Download
              </a>
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
          <h1 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[50px]">
            What <span className="text-primary">Customers</span> have to say
          </h1>
        </div>

        <div className="flex flex-wrap  gap-20 lg:gap-0  justify-between my-20">
          <div className="w-full lg:w-[48%] bg-[#F2F8F2]  rounded-[20px] flex gap-10">
            <Image
              src="/assets/customer1.png"
              alt="Your Image Alt Text"
              className="w-1/2 transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p className="text-sm font-light text-justify">
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
              <p className="text-sm font-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <p>Grace Obi</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full pb-10">
          <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            View All
          </button>
        </div>
      </section>
      {/* {section 8} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-gray-800 mx-auto font-semibold font-graphik leading-[50px]">
            Your money will be{" "}
            <span className="text-primary">safe & secure</span>
          </h1>
          <p className="text-sm font-light text-center mt-1">
            Your money is regulated by mutual fund companies. iNRI doesn’t keep
            or handle your mponey
          </p>
        </div>

        <div className="flex flex-wrap  gap-4 md:gap-0  justify-between my-20 items-start">
          <div className="w-full md:w-[20%] flex flex-col gap-4 justify-center items-center">
            <Image
              src="/assets/dollar.png"
              alt="Your Image Alt Text"
              className="w-[60%] lg:w-[73%] transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <p className="font-semibold mt-4 text-center">
              From your Foreign Bank{" "}
            </p>
            <p className="text-sm font-light text-center leading-6 w-2/3 md:w-full">
              Convert to INR through your preferred remittance partner
            </p>
          </div>
          <div className="w-full md:w-[20%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
            <div className="border-gray-700 border-2 w-1 h-[100px] md:h-1 md:w-[35%] border-dashed" />
            <Image
              src="/assets/lock.png"
              alt="Your Image Alt Text"
              className="w-[50px] transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="border-gray-700 border-2 w-1 h-[100px] md:h-1 md:w-[35%] border-dashed" />
          </div>
          <div className="w-full md:w-[20%] flex flex-col gap-4 justify-center items-center">
            <Image
              src="/assets/currency.png"
              alt="Your Image Alt Text"
              className=" w-1/2 lg:w-2/3 transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <p className="font-semibold mt-4 text-center">To NRE/NRO Account</p>
            <p className="text-sm font-light text-center leading-6 w-2/3 md:w-full">
              Integrate bank account and pay through net-banking
            </p>
          </div>
          <div className="w-full md:w-[20%] flex flex-col md:flex-row  gap-2  justify-between items-center mt-0 md:mt-6 lg:mt-12">
            <div className="border-gray-700 border-2 w-1 h-[100px] md:h-1 md:w-[35%] border-dashed" />
            <Image
              src="/assets/shield.png"
              alt="Your Image Alt Text"
              className="w-[50px] transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="border-gray-700 border-2 w-1 h-[100px] md:h-1 md:w-[35%] border-dashed" />
          </div>
          <div className="w-full md:w-[20%] flex flex-col gap-4 justify-center items-center">
            <Image
              src="/assets/funds.png"
              alt="Your Image Alt Text"
              className=" w-1/2 lg:w-2/3 transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <p className="font-semibold mt-[35px] text-center">
              To Mutual Funds
            </p>
            <p className="text-sm font-light text-center leading-6 w-2/3 md:w-full">
              Invest directly in your selected mutual funds
            </p>
          </div>
        </div>
      </section>
      {/* {section 9} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-40">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-primary mx-auto  font-semibold font-graphik leading-[50px]">
            FAQ
          </h1>
          <p className="font-extralight mt-1">
            Learn about us and check out these frequently asked questions.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 mt-10">
          <div className="w-full md:w-[45%] text-right">
            <div className="flex flex-col gap-10">
              <FAQ question={options} answer={details} />
              <FAQ question={options3} answer={details} />
              <FAQ question={options5} answer={details} />
            </div>
          </div>
          <div className="w-full md:w-[45%] text-right">
            <div className="flex flex-col gap-10">
              <FAQ question={options2} answer={details} />
              <FAQ question={options4} answer={details} />
              <FAQ question={options6} answer={details} />
            </div>
          </div>

          {/* <div className="w-full md:w-[45%] text-right">
            <FAQ question={options} answer={details} />
          </div>
          <div className="w-full md:w-[45%] text-right">
            <FAQ question={options2} answer={details} />
          </div>
          <div className="w-full md:w-[45%] text-right">
            <FAQ question={options3} answer={details} />
          </div>
          <div className="w-full md:w-[45%] text-right">
            <FAQ question={options4} answer={details} />
          </div>
          <div className="w-full md:w-[45%] text-right">
            <FAQ question={options5} answer={details} />
          </div>
          <div className="w-full md:w-[45%] text-right">
            <FAQ question={options6} answer={details} />
          </div> */}
        </div>
        <div className=" flex justify-center items-center w-full py-10">
          <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            View All
          </button>
        </div>
      </section>
      {/* {section 10} */}
      <section className="bg-secondary px-4 md:px-20 lg:px-40 py-20 mt-10">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-gray-800 mx-auto font-semibold font-graphik">
            <span className="text-primary">Blogs</span>
          </h1>
        </div>

        <div className="flex flex-wrap  gap-20 md:gap-0  justify-between my-10">
          <div
            className="w-full md:w-[30%] bg-white  rounded-[20px] flex flex-col gap-4 hover:drop-shadow-md"
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            <Image
              src="/assets/blog1.png"
              alt="Your Image Alt Text"
              className="w-full transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p>Lorem ipsum dolor sit amet,</p>
              <p className="text-sm font-light mt-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <a
                className={`text-blue-600 cursor-pointer mt-4 ${
                  show ? "block" : "hidden"
                }`}
              >
                Read More
              </a>
            </div>
          </div>
          <div
            className="w-full md:w-[30%] bg-white  rounded-[20px] flex flex-col gap-4 hover:drop-shadow-md"
            onMouseEnter={() => {
              setShow2(true);
            }}
            onMouseLeave={() => {
              setShow2(false);
            }}
          >
            <Image
              src="/assets/blog2.png"
              alt="Your Image Alt Text"
              className="w-full transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p>Lorem ipsum dolor sit amet,</p>
              <p className="text-sm font-light mt-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <a
                className={`text-blue-600 cursor-pointer mt-4 ${
                  show2 ? "block" : "hidden"
                }`}
              >
                Read More
              </a>
            </div>
          </div>
          <div
            className={`w-full md:w-[30%] bg-white  rounded-[20px] flex flex-col gap-4 hover:drop-shadow-md`}
            onMouseEnter={() => {
              setShow3(true);
            }}
            onMouseLeave={() => {
              setShow3(false);
            }}
          >
            <Image
              src="/assets/blog3.png"
              alt="Your Image Alt Text"
              className="w-full transition-all duration-300 hover:scale-105"
              width={500}
              height={1}
            />
            <div className="flex flex-col justify-between p-4">
              <p>Lorem ipsum dolor sit amet,</p>
              <p className="text-sm font-light mt-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
              </p>
              <a
                className={`text-blue-600 cursor-pointer transition-opacity duration-300 mt-4 ${
                  show3 ? "block" : "hidden"
                }`}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* {section 11} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-20  mb-40">
        <div className="w-full bg-[#F2F8F2] px-4 rounded-[20px] py-10 relative overflow-hidden">
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
            <h1 className="text-gray-800 mx-auto  font-semibold text-center font-graphik leading-[50px]">
              Get in touch <span className="text-primary">NRI website</span> and
              invest in your future Product
            </h1>
          </div>
          <div className="flex  justify-center items-center w-full mt-6">
            <button className="px-8 z-10 py-2 text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
