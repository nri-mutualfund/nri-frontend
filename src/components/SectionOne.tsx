import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { DataProps } from "../utility/type";
import NProgress from "nprogress";
import nProgress from "nprogress";
interface SectionOneProps {
  data: DataProps;
}
const SectionOne = ({ data }: SectionOneProps) => {
  return (
    <>
      <section className="flex-col py-14 md:py-24 xl:px-40 md:px-16 px-4">
        <div className="flex justify-center align-middle ">
          <div className="relative text-center max-w-2xl lg:max-w-2xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="h-10 w-[250px] md:w-[300px] fill-[#00965A40] absolute top-20 md:top-10 right-[90px] md:right-30 -z-20"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <h1 className="text-text_dark mx-auto font-medium text-[36px] md:text-[44px] leading-tight">
              {data?.pre_heading}{" "}
              <span className="text-text_dark">{data?.highlightned}</span>{" "}
              {data?.post_heading}
            </h1>
            <h5 className="text-center text-text_dark text-[18px] md:text-[20px] font-normal leading-normal mt-3 mb-5 mx-auto w-[85%] md:w-[60%]">
              {data?.detail}{" "}
            </h5>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-2 ">
          <Link
            href={"/talk"}
            onClick={() => {
              nProgress.start();
            }}
          >
            <button className=" flex gap-2  items-center bg-primary text-white px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              {" "}
              <span> Schedule a Meeting </span>
              <IoCalendarNumberOutline className="text-xl" />
            </button>
          </Link>

          <Link
            href={"/signup"}
            onClick={() => {
              NProgress.start();
            }}
          >
            <button className="bg-white text-primary border-primary border px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              {" "}
              Sign Up
            </button>
          </Link>
        </div>
        <Link
          href={"https://www.mutualfundssahihai.com/en/amfi"}
          target="_blank"
          className="flex justify-center items-center"
        >
          <button className="border-2  border-gray-100 px-2 py-2 bg-secondary flex gap-4 justify-between rounded-lg items-center mt-6 drop-shadow-md mx-4 md:mx-20 xl:mx-auto">
            <Image
              src={"/assets/images.png"}
              alt="cots"
              className="w-[35px]"
              width={400}
              height={1}
            />
            <h5 className="text-text_dark text-left text-xs md:text-[16px] leading-normal">
              NRI is a certified Mutual Fund distributor registered with
              Association of Mutual Funds in India (AMFI) with Reg. No. 000000
            </h5>
            {/* <GoArrowUpRight
              size={100}
              color=" #00965A"
              className="block md:hidden"
            />
            <GoArrowUpRight
              size={25}
              color=" #00965A"
              className="hidden md:block"
            /> */}
          </button>
        </Link>
      </section>
    </>
  );
};

export default SectionOne;
