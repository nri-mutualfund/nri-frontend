"use client";
import FAQ from "@/components/FAQ";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSectionFAQ } from "../api/api";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["post7"],
    queryFn: getSectionFAQ,
  });
  return (
    <section className=" px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-gray-800 mx-auto  font-medium  leading-[40px] text-center">
          Frequently <span className="text-primary">Asked</span> Questions
        </h2>
        <p className="font-extralight mt-1 text-sm text-center">
          Learn about us and check out these frequently asked questions.
        </p>
      </div>
      {data?.length && (
        <div className="flex flex-wrap justify-between gap-6 mt-10">
          <div className="w-full md:w-2/3 text-right mx-auto">
            <div className="flex flex-col gap-6">
              <FAQ question={data[0]?.question} answer={data[0]?.answer} />
              <FAQ question={data[1]?.question} answer={data[1]?.answer} />
              <FAQ question={data[2]?.question} answer={data[2]?.answer} />
              <FAQ question={data[3]?.question} answer={data[3]?.answer} />
              <FAQ question={data[4]?.question} answer={data[4]?.answer} />
              <FAQ question={data[5]?.question} answer={data[5]?.answer} />
            </div>
          </div>

        </div>
      )}
      <div className="w-full md:w-2/3 text-right mx-auto">
        <nav aria-label="faq navigation" className="flex items-center justify-between mt-8">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white  border-e- rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
            </li>
          </ul>

          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 bg-blue-50 hover:bg-gray-100 hover:text-gray-700 ">1</a>
            </li>
            {/* <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10  text-gray-500  bg-white   hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
            </li> */}
          </ul>
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
            </li>
          </ul>
        </nav>
      </div>

    </section>
  );
};

export default Page;
