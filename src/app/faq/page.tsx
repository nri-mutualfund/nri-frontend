"use client";
import FAQ from "@/components/FAQ";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pagination } from "flowbite-react";
import React, { useState } from "react";
import { getSectionFAQ } from "../api/api";
import Loader from "@/components/Loader";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["faq", currentPage],
    queryFn: () => getSectionFAQ(currentPage),
  });
  return (
    <section className=" px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-[#424242] mx-auto font-medium text-center  leading-tight">
      Frequently <span className="text-primary">Asked</span> Questions
        </h1>
        <p className="font-medium mt-4 mb-4 text-[#424242] text-center max-w-2xl mx-auto">
        Learn about us and check out these frequently asked questions.
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data?.length && (
          <div className="flex flex-wrap justify-between gap-6 mt-10">
            <div className="w-full md:w-2/3 text-right mx-auto">
              <div className="flex flex-col gap-6">
                {data?.data.map((item: any) => (
                  <FAQ
                    key={item?.id}
                    question={item?.question}
                    answer={item?.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      )}
      {/* <div className="w-full md:w-2/3 text-right mx-auto"> */}
      <div className="flex overflow-x-auto justify-center mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={data?.pagination?.pageCount ?? 0}
          onPageChange={onPageChange}
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Page;
