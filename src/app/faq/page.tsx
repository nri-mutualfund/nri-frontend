"use client";
import FAQ from "@/components/FAQ";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getSectionFAQ } from "../api/api";
import Loader from "@/components/Loader";
import CustomPagination from "@/components/CustomPagination";

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
    <div className="max-w-screen-2xl mx-auto">
      <section className=" px-4 md:px-20 lg:px-40 py-10">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="mx-auto text-center">
            Frequently <span className="text-text_dark">Asked</span> Questions
          </h1>
          <h4 className="mt-4 mb-4 text-center max-w-2xl mx-auto">
            Learn about us and check out these frequently asked questions.
          </h4>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data?.length > 0 && (
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
        <div className="my-10 w-full">
          <CustomPagination
            currentPage={currentPage}
            total={data?.pagination?.pageCount}
            onPageChange={onPageChange}
          />
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Page;
