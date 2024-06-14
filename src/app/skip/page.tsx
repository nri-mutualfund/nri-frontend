"use client";
import Link from "next/link";
import nProgress from "nprogress";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col justify-center items-center h-screen bg-white px-4 md:px-20 lg:px-40">
        <BsCheckCircle size={150} color="#008000" />
        <h2 className="md:max-w-[60%] text-center mt-14 text-gray-800 font-medium  leading-[45px]">
          Your Profile is created Complete your KYC to start investing.
        </h2>
        <Link
          href={"/verify-pan2"}
          onClick={() => {
            nProgress.start();
          }}
        >
          <button className="px-8 flex gap-2 items-center py-2 mt-10  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            Initiate KYC
            <BsArrowRight size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
