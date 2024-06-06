"use client";
import FAQ from "@/components/FAQ";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSectionFAQ } from "../api/api";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["faq"],
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
    </section>
  );
};

export default Page;
