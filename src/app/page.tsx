"use client";
import React, { useState } from "react";
import { TbDeviceMobileDown, TbAntennaBars5 } from "react-icons/tb";
import {
  FaFingerprint,
  FaCanadianMapleLeaf,
  FaArrowRight,
} from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { HiArrowPath } from "react-icons/hi2";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoCalendarNumberOutline, IoLockClosedOutline } from "react-icons/io5";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
const Page = () => {
  const [index, setIndex] = useState(0);
  const [expandIndex, setExpand] = useState(6);
  const [showArrow, setShowArrow] = useState(false);

  const products = [
    "Mutual Funds",
    "Fixed Deposits",
    "Commercial Real Estate",
    "PMS",
    "Bond",
  ];
  const features = [
    {
      name: "Invest reliably with index funds",
      description:
        "Invest reliably with index funds: Build wealth over time by subscribing to our curated portfolio of equity & debt instruments. Relax and focus on other important things in life",
      icon: AiOutlineCloudUpload,
    },
    {
      name: "Earn high returns with India’s growth",
      description:
        "Earn high returns with India’s growth: With its young talent and growing urban class, India is poised to be one of the fastest growing economies in the next decade. We offer a seamless way for this growth to reflect in your asset portfolio.",
      icon: IoLockClosedOutline,
    },
    {
      name: "Faster account opening processes with trusted banks",
      description:
        "Faster account opening processes with trusted banks:** Invest with us and open a NRE/NRO bank account with top banks like ICICI, Axis, Yes in few days. No more waiting for weeks just to get started.",
      icon: HiArrowPath,
    },
    {
      name: "Complimentary tax guidance",
      description:
        "Complimentary tax guidance: Investing in a foreign market can be complicated, especially when it comes to taxation. Use our simple and tax-compliant platform to invest with confidence.",
      icon: FaFingerprint,
    },
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
    <div className="max-w-screen-2xl mx-auto  font-graphik">
      {/* sectin 1 */}
      {/* <Image
        src="/assets/circle.png"
        alt="Your Image Alt Text"
        className="w-[120px] lg:w-[150px] absolute right-0 top-32"
        width={500}
        height={1}
      /> */}
      <section className="flex-col px-2 pt-16">
        <div className="flex justify-center align-middle pt-20">
          <div className="relative text-center max-w-3xl lg:max-w-4xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="h-10 w-[250px] md:w-[300px] fill-[#00800040] absolute top-20 md:top-10 right-[90px] md:right-30 -z-20"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <h2 className="text-gray-800 mx-auto text-5xl md:text-6xl  leading-[55px] md:leading-[70px]">
              The easiest and <span className="text-primary">fastest way </span>
              to Invest in India
            </h2>
            <p className="text-center leading-6 mt-10 mx-auto w-[85%] md:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
              mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
              ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-2 mb-16">
          <button className=" flex gap-2  items-center bg-primary text-white px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            {" "}
            <span> Schedule a Meeting </span>
            <IoCalendarNumberOutline className="text-xl" />
          </button>
          <Link href={"/login"}>
            <button className="bg-white text-primary border-primary border px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              {" "}
              Sign Up
            </button>
          </Link>
        </div>
        <Link
          href={"https://www.mutualfundssahihai.com/en/amfi"}
          target="_blank"
        >
          <button className="border-2 mb-32 border-gray-100 px-4 py-4 bg-secondary flex gap-4 justify-between rounded-lg items-center mt-6 drop-shadow-md mx-4 md:mx-20 xl:mx-auto">
            <Image
              src={"/assets/images.png"}
              alt="cots"
              className="w-[40px]"
              width={500}
              height={1}
            />
            <p className="text-center">
              NRI is a certified Mutual Fund distributor registered with
              Association of Mutual Funds in India (AMFI) with Reg. No. 000000
            </p>
            <GoArrowUpRight
              size={100}
              color="#008000"
              className="block md:hidden"
            />
            <GoArrowUpRight
              size={25}
              color="#008000"
              className="hidden md:block"
            />
          </button>
        </Link>
      </section>

      {/* section 2 */}
      <section className="px-4 md:px-20 lg:px-40 mt-10 bg-secondary">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-2 font-bold tracking-tight text-gray-900">
                A one-stop <span className="text-primary">Indian</span> Expats
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
                ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-5 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    {index === 3 ? (
                      <dd className="text-sm text-base text-gray-600 mt-6">
                        {feature.description}
                      </dd>
                    ) : (
                      <dd className="mt-2 text-sm text-base text-gray-600">
                        {feature.description}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24">
        <div className="w-full lg:w-1/2">
          <h2 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[40px]">
            Product <span className="text-primary">We offer</span>
          </h2>
          <p className="text-sm font-light mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu,
          </p>
        </div>

        <div className="flex gap-12 justify-between mt-8">
          <div className="w-full flex flex-col gap-4 lg:hidden">
            {expandIndex === 0 ? (
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
                    <p className="text-2xl font-medium">Mutual Funds</p>
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
            ) : (
              <div
                // className=`flex gap-10 w-full indexbg-[#F2F8F2] items-center px-8 py-4 rounded-lg drop-shadow-sm`
                className={`flex gap-10 w-full ${
                  index === 0 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center px-8 py-4 rounded-lg ${
                  index === 0 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(0);
                }}
              >
                <Image
                  src="/assets/money1.png"
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className="text-xl font-medium">Mutual Funds</p>
                  <p className="mt-2 font-light">
                    Diversified portfolio for long-term growth.
                  </p>
                </div>
              </div>
            )}
            {expandIndex === 1 ? (
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
                  <div className="py-10 px-4">
                    <p className="text-2xl font-medium">Fixed Deposits</p>
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
            ) : (
              <div
                className={`flex gap-10 w-full ${
                  index === 1 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center px-8 py-4 rounded-lg ${
                  index === 1 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(1);
                }}
              >
                <Image
                  src="/assets/deposit.png"
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className="text-xl font-medium">Fixed Deposits</p>
                  <p className="mt-2 font-light">
                    Diversified portfolio for long-term growth.
                  </p>
                </div>
              </div>
            )}
            {expandIndex === 2 ? (
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
                    <p className="text-2xl font-medium">
                      Commercial Real Estate
                    </p>
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
            ) : (
              <div
                className={`flex gap-10 w-full ${
                  index === 2 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center px-8 py-4 rounded-lg ${
                  index === 2 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(2);
                }}
              >
                <Image
                  src="/assets/house.png"
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className="text-xl font-medium">Commercial Real Estate</p>
                  <p className="mt-2 font-light">
                    Diversified portfolio for long-term growth.
                  </p>
                </div>
              </div>
            )}
            {expandIndex === 3 ? (
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
                    <p className="text-2xl font-medium">PMS</p>
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
            ) : (
              <div
                className={`flex gap-10 w-full ${
                  index === 3 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center px-8 py-4 rounded-lg ${
                  index === 3 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(3);
                }}
              >
                <Image
                  src="/assets/saving.png"
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className="text-xl font-medium">PMS</p>
                  <p className="mt-2 font-light">
                    Diversified portfolio for long-term growth.
                  </p>
                </div>
              </div>
            )}
            {expandIndex === 4 ? (
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
                    <p className="text-2xl font-medium">Bond</p>
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
            ) : (
              <div
                className={`flex gap-10 w-full ${
                  index === 4 ? "bg-[#F2F8F2]" : "bg-[#F7F6F4]"
                } items-center px-8 py-4 rounded-lg ${
                  index === 4 ? "drop-shadow-sm" : "drop-shadow-lg"
                }`}
                onClick={() => {
                  setExpand(4);
                }}
              >
                <Image
                  src="/assets/bond.png"
                  alt="Your Image Alt Text"
                  className="w-[40px] sm:w-[48px]"
                  width={500}
                  height={1}
                />
                <div className="">
                  <p className="text-xl font-medium">Bond</p>
                  <p className="mt-2 font-light">
                    Diversified portfolio for long-term growth.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-[48%]  flex-col gap-4 hidden lg:flex">
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
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">Mutual Funds</p>
                <p className="mt-2 font-light text-sm">
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
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">Fixed Deposits</p>
                <p className="mt-2 font-light text-sm">
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
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">Commercial Real Estate</p>
                <p className="mt-2 font-light text-sm">
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
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">PMS</p>
                <p className="mt-2 font-light text-sm">
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
                className="w-[48px]"
                width={500}
                height={1}
              />
              <div className="">
                <p className="text-xl font-medium">Bond</p>
                <p className="mt-2 font-light text-sm">
                  Diversified portfolio for long-term growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#F2F8F2] px-10 rounded-[20px] py-4 hidden lg:block">
            <div className="bg-white flex flex-col justify-between rounded-[20px] h-full">
              <Image
                src="/assets/long-term-wealth.png"
                alt="Your Image Alt Text"
                className="rounded-md w-full h-[200px]"
                width={500}
                height={1}
              />
              <div className="pt-4 px-4">
                <p className="text-2xl font-medium">{products[index]}</p>
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
              <div className=" flex justify-center items-center w-full pb-6">
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
      <section className=" px-4 md:px-20 lg:px-40 mt-10 lg:mt-32 py-10 lg:py-32 bg-secondary">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 mt-4 lg:grid-cols-2 items-center">
          <div className="w-full">
            <h2 className="text-gray-800  font-semibold font-graphik leading-[40px] max-w-80">
              Open <span className="text-primary">NRI Bank Account </span>in
              India
            </h2>
            <p className="font-light mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum,
              augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Et, egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex  items-start mt-10">
                <button className="px-8  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  Create Account
                </button>
              </div>
              <button
                className="flex gap-4  px-6 items-center mt-10 py-2 rounded-md bg-white border border-primary text-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
                onMouseEnter={() => {
                  setShowArrow(true);
                }}
                onMouseLeave={() => {
                  setShowArrow(false);
                }}
              >
                Contact us
                {showArrow && <GoArrowRight size={20} color="#008000" />}
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 items-center">
              <div className="w-full">
                <Image
                  src="/assets/AXIS_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[180px]"
                  width={500}
                  height={1}
                />
              </div>
              <div className="w-full">
                <Image
                  src="/assets/IDFC_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[180px]"
                  width={500}
                  height={1}
                />
              </div>
              <div className="w-full">
                <Image
                  src="/assets/ICICI_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[180px]"
                  width={500}
                  height={1}
                />
              </div>
              <div className="w-full">
                <Image
                  src="/assets/HDFC_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[180px]"
                  width={500}
                  height={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="px-4 md:px-20 lg:px-40 mt-10 lg:mt-32">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[40px]">
            <span className="text-primary">NRI</span> Services
          </h2>
          <p className="font-light text-sm mt-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu,
          </p>
        </div>

        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-14 mx-auto mt-10">
          <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
            <div className="pl-8 pr-4 pt-10">
              <Image
                src="/assets/tax.png"
                alt="Your Image Alt Text"
                className="w-[50px]"
                width={500}
                height={1}
              />
              <p className="text-2xl font-medium mt-2">Taxation</p>
            </div>
            <div className="pt-8 pl-8 pr-20 pb-12">
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <FaCanadianMapleLeaf size={20} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Personalized consultations with{" "}
                  <span className="text-black">NRI-specialized </span>
                  taxation
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <PiShootingStarThin size={22} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  File ITRs hassle-free & maximize the refunds
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <TbAntennaBars5 size={25} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Apply for <span className="text-black">15CA & CB</span> & Make
                  your (NRO-NRE) transfers stress-free
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <PiShootingStarThin size={22} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  <span className="text-black">
                    {" "}
                    Apply for Lower TDS certificates
                  </span>{" "}
                  & Reduce TDS deductions on property sales
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <FaCanadianMapleLeaf size={20} color="gray" />
                </div>
                <p className="font-medium text-sm text-black ml-10">
                  {`Received an Income Tax Notice? Don't worry, we're here to help`}
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <TbAntennaBars5 size={25} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Gain More, Pay Less: Top-notch Capital Gain Tax Planning
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
            <div className="pl-8 pr-4 pt-10">
              <Image
                src="/assets/doc.png"
                alt="Your Image Alt Text"
                className="w-[50px]"
                width={500}
                height={1}
              />
              <p className="text-2xl font-medium mt-2">Documentation</p>
            </div>

            <div className="pt-8 pl-8 pr-20 pb-12">
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <FaCanadianMapleLeaf size={20} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Apply for a new <span className="text-black">PAN </span>
                  digitally
                </p>
                <br />
              </div>
              <div className="flex items-start mt-8 relative">
                <div className="w-10 absolute left-0">
                  <PiShootingStarThin size={22} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Update/ correct &{" "}
                  <span className="text-black">Link Aadhaar</span>
                </p>
                <br />
              </div>
              <div className="flex items-start mt-8 relative">
                <div className="w-10 absolute left-0">
                  <TbAntennaBars5 size={25} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Reprint <span className="text-black">PAN Card</span> (Lost/
                  Damaged)
                </p>
                <br />
              </div>
              <div className="flex items-start mt-8 relative">
                <div className="w-10 absolute left-0">
                  <PiShootingStarThin size={22} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Quick issuance with a streamlined digital process
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <FaCanadianMapleLeaf size={20} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  Seamless Pan card delivery to your doorstep -{" "}
                  <span className="text-black">
                    Anywhere, Anytime, Worldwide
                  </span>
                </p>
              </div>
              <div className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                  <TbAntennaBars5 size={25} color="gray" />
                </div>
                <p className="font-medium text-sm text-gray-500 ml-10">
                  For inquiries & assistance, our 24/7 chat support team is at
                  your service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {section 7} */}
      <section className="px-4 md:px-20 lg:px-10 mt-24 py-12">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[40px] text-center">
            What <span className="text-primary">Customers</span> have to say
          </h2>
          <p className="font-light text-sm mt-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu,
          </p>
        </div>
        <div className="py-20">
          <ImageSlider />
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-white px-16 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            View All
          </button>
        </div>
      </section>
      {/* {section 8} */}
      <section className=" px-4 md:px-20 lg:px-40 mt-24 bg-secondary py-32">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-gray-800 mx-auto font-semibold font-graphik leading-[40px] text-center">
            Your money will be{" "}
            <span className="text-primary">safe & secure</span>
          </h2>
          <p className="text-sm font-light text-center mt-1">
            Your money is regulated by mutual fund companies. NRI doesn’t keep
            or handle your money
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
          <h2 className="text-gray-800 mx-auto  font-semibold font-graphik leading-[40px] text-center">
            Frequently <span className="text-primary">Asked</span> Questions
          </h2>
          <p className="font-extralight mt-1 text-sm text-center">
            Learn about us and check out these frequently asked questions.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-6 mt-10">
          <div className="w-full md:w-[45%] text-right">
            <div className="flex flex-col gap-6">
              <FAQ question={options} answer={details} />
              <FAQ question={options3} answer={details} />
              <FAQ question={options5} answer={details} />
            </div>
          </div>
          <div className="w-full md:w-[45%] text-right">
            <div className="flex flex-col gap-6">
              <FAQ question={options2} answer={details} />
              <FAQ question={options4} answer={details} />
              <FAQ question={options6} answer={details} />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full py-10">
          <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            View All
          </button>
        </div>
      </section>
      {/* {section 10} */}
      <section className="bg-secondary px-4 md:px-20 lg:px-40 py-20 mt-10">
        <h2 className="text-gray-800 mx-auto font-semibold text-center font-graphik leading-[40px]">
          <span className="text-primary">Resource Center</span>
        </h2>
        <p className="font-extralight mt-1 text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing fermentum ante eu
          dignissim pulvinar.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-8 mt-20 items-center">
          <div>
            <p className="font-light text-sm">Mar 16, 2020</p>
            <h2 className="text-gray-800 font-semibold leading-[40px] mt-6">
              We’re incredibly proud to announce we have secured $75m in Series
              B
            </h2>
            <p className="font-light mt-6 text-base">
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio
              id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
              Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
              faucibus.
            </p>
            <button className="flex items-center gap-2 text-primary mt-6">
              <p>Continue reading</p>
              <FaArrowRight />
            </button>
            <div className="border-[0.5px] mt-8 hidden lg:block" />
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[30px]"
                width={500}
                height={1}
              />
              <p className="font-semibold">Michael Foster</p>
            </div>
            <div className="border-[0.5px] mt-8 block lg:hidden" />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-light text-sm">Mar 10, 2020</p>
              <p className="text-gray-800 font-semibold mt-2 text-base">
                Boost your conversion rate
              </p>
              <p className="font-light mt-3 text-sm">
                Libero neque aenean tincidunt nec consequat tempor. Viverra odio
                id velit adipiscing id. Nisi vestibulum orci eget bibendum
                dictum. Velit viverra posuere vulputate volutpat nunc. Nunc
                netus sit faucibus.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={"/assets/male.png"}
                  alt="cots"
                  className="w-[30px]"
                  width={500}
                  height={1}
                />
                <p className="font-semibold">Michael Foster</p>
              </div>
            </div>
            <div className="border-[0.5px]" />
            <div>
              <p className="font-light text-sm">Feb 12, 2020</p>
              <p className="text-gray-800 font-semibold mt-2 text-base">
                How to use search engine optimization to drive sales
              </p>
              <p className="font-light mt-3 text-sm">
                Libero neque aenean tincidunt nec consequat tempor. Viverra odio
                id velit adipiscing id. Nisi vestibulum orci eget bibendum
                dictum. Velit viverra posuere vulputate volutpat nunc. Nunc
                netus sit faucibus.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={"/assets/male.png"}
                  alt="cots"
                  className="w-[30px]"
                  width={500}
                  height={1}
                />
                <p className="font-semibold">Michael Foster</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full py-10">
          <button
            className="flex gap-4  px-6 items-center mt-10 py-2 rounded-md bg-white border border-primary text-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            onMouseEnter={() => {
              setShowArrow(true);
            }}
            onMouseLeave={() => {
              setShowArrow(false);
            }}
          >
            Read More
            {showArrow && <GoArrowRight size={20} color="#008000" />}
          </button>
        </div>
      </section>
      {/* {section 11} */}
      {/* <section className="px-4 md:px-20 lg:px-40 mt-32 py-32">
        <div
          className="flex justify-start items-center h-[250px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/community.png')" }}
        >
          <div className="">
            <p className="font-semibold text-lg text-center">
              Join our Whatsapp community of NRI/OCIs like you
            </p>
            <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <FaWhatsapp size={20} color="#fff" />
              Join Community
            </button>
          </div>
        </div>
      </section> */}
      {/* <section
        className="px-4 md:px-20 lg:px-40 mt-12 h-36 bg-cover bg-center bg-no-repeat block md:hidden py-4"
        style={{ backgroundImage: "url('/assets/community2.png')" }}
      >
        <div className="flex justify-center items-center">
          <div>
            <p className="text-lg  text-center max-w-[250px] text-[#111827]">
              Join our Whatsapp community of NRI/OCIs like you
            </p>
            <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <FaWhatsapp size={20} color="#fff" />
              Join Community
            </button>
          </div>
        </div>
      </section> */}
      <section className="px-4 md:px-20 lg:px-40 mt-32  md:hidden block">
        <div
          className="bg-cover bg-center bg-no-repeat rounded-[30px] py-6 drop-shadow-md"
          style={{ backgroundImage: "url('/assets/community2.png')" }}
        >
          <div className="flex justify-center items-center">
            <div>
              <p className="text-lg  text-center max-w-[250px] text-[#111827]">
                Join our Whatsapp community of NRI/OCIs like you
              </p>
              <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <FaWhatsapp size={20} color="#fff" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-20 lg:px-40 mt-32  hidden md:block ">
        <div
          className="bg-cover bg-center bg-no-repeat rounded-[30px] py-8 drop-shadow-md lg:py-16"
          style={{ backgroundImage: "url('/assets/community2.png')" }}
        >
          <div className="flex justify-center items-center h-full">
            <div>
              <p className="font-semibold text-xl text-center max-w-[320px] text-[#111827]">
                Join our Whatsapp community of NRI/OCIs like you
              </p>
              <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <FaWhatsapp size={20} color="#fff" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className="px-4 md:px-20 lg:px-40 mt-32 py-32 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/assets/community.png')" }}
      >
        <div className="grid grid-cols-1 gap-x-20 gap-y-20 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 items-center">
          <div className="w-full px-10  md:px-40 lg:px-0">
            <div className="flex gap-x-20">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
              <Image
                src={"/assets/female.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
            </div>
            <div className="flex gap-x-20 ml-20 mt-4">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
              <Image
                src={"/assets/female.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
            </div>
          </div>
          <div className="w-full px-10 md:px-36 lg:px-0">
            <p className="font-semibold text-lg text-center">
              Join our Whatsapp community of NRI/OCIs like you
            </p>
            <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <FaWhatsapp size={20} color="#fff" />
              Join Community
            </button>
          </div>
          <div className="w-full  px-10 md:px-40 lg:px-0">
            <div className="flex gap-x-20 ml-20">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
              <Image
                src={"/assets/female.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
            </div>
            <div className="flex gap-x-20 mt-4">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
              <Image
                src={"/assets/female.png"}
                alt="cots"
                className="w-[70px]"
                width={500}
                height={1}
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
export default Page;
