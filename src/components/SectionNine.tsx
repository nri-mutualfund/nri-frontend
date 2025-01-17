import { DataProps } from "@/utility/type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NProgress from "nprogress";

interface SectionOneProps {
  data: DataProps;
}
const SectionNine = ({ data }: SectionOneProps) => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <section className="bg-secondary px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <h2 className="text-gray-800 mx-auto font-medium text-center  leading-[40px]">
        {data?.pre_heading}
        <span className="text-primary">{data?.highlightned}</span>{" "}
        {data?.post_heading}
      </h2>
      <p className="font-extralight mt-1 text-sm text-center">{data?.detail}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-8 mt-20 items-center">
        <div>
          <p className="font-light text-sm">
            {moment(data?.data[0]?.created_at).format("MMM DD, YYYY")}
          </p>
          <h2 className="text-gray-800 font-medium leading-[40px] mt-6">
            {data?.data[0]?.blog_heading}
          </h2>
          <p className="font-light mt-6 text-base">
            {data?.data[0]?.blog_content}
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
            <p className="font-semibold"> {data?.data[0]?.user_name}</p>
          </div>
          <div className="border-[0.5px] mt-8 block lg:hidden" />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-light text-sm">
              {moment(data?.data[1]?.created_at).format("MMM DD, YYYY")}
            </p>
            <p className="text-gray-800 font-semibold mt-2 text-base">
              {data?.data[1]?.blog_heading}
            </p>
            <p className="font-light mt-3 text-sm">
              {data?.data[1]?.blog_content}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[30px]"
                width={500}
                height={1}
              />
              <p className="font-semibold">{data?.data[1]?.user_name}r</p>
            </div>
          </div>
          <div className="border-[0.5px]" />
          <div>
            <p className="font-light text-sm">
              {moment(data?.data[2]?.created_at).format("MMM DD, YYYY")}
            </p>
            <p className="text-gray-800 font-semibold mt-2 text-base">
              {data?.data[2]?.blog_heading}
            </p>
            <p className="font-light mt-3 text-sm">
              {data?.data[2]?.blog_content}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={"/assets/male.png"}
                alt="cots"
                className="w-[30px]"
                width={500}
                height={1}
              />
              <p className="font-semibold">{data?.data[2]?.user_name}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-center items-center w-full py-10">
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
    </div> */}
      <div className=" flex justify-center items-center w-full py-10">
        <Link
          href={"/blog"}
          onClick={() => {
            NProgress.start();
          }}
        >
          <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectionNine;
