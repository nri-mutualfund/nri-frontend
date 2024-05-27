"use client";
import React, { useState } from "react";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import SectionEight from "@/components/SectionEight";
import SectionNine from "@/components/SectionNine";
import SectionTen from "@/components/SectionTen";
import { useQuery } from "@tanstack/react-query";
import { getSectionBlog, getSectionFAQ, getSectionFive, getSectionFour, getSectionOne, getSectionSix, getSectionThree, getSectionTwo } from "./api/api";
const Page = () => {
  const { data, isLoading, status, isSuccess } = useQuery({
    queryKey: ["post"],
    queryFn: getSectionOne,
  });
  const sectionTwo = useQuery({
    queryKey: ["post2"],
    queryFn: getSectionTwo,
  });
  const sectionThree = useQuery({
    queryKey: ["post3"],
    queryFn: getSectionThree,
  });
  const sectionFour = useQuery({
    queryKey: ["post4"],
    queryFn: getSectionFour,
  });
  const sectionFive = useQuery({
    queryKey: ["post5"],
    queryFn: getSectionFive,
  });
  const sectionSix = useQuery({
    queryKey: ["post6"],
    queryFn: getSectionSix,
  });
  const sectionFAQ = useQuery({
    queryKey: ["post7"],
    queryFn: getSectionFAQ,
  });
  const sectionBlog = useQuery({
    queryKey: ["post8"],
    queryFn: getSectionBlog,
  });
  const checkLoading = ()=>{
    return isLoading&&sectionTwo?.isLoading&&sectionThree?.isLoading&&sectionFour?.isLoading&&sectionFive?.isLoading&&sectionSix?.isLoading&&sectionFAQ?.isLoading&&sectionBlog?.isLoading;
  }
  return (
    <>
      {checkLoading() ? (
        <section className="h-screen flex justify-center items-center">
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#008000] animate-spin"></div>
            </div>
          </div>
        </section>
      ) : (
        <div className="max-w-screen-2xl mx-auto ">
          {/* sectin 1 */}
          <SectionOne data={data} />
          {/* section 2 */}
          <SectionTwo data={sectionTwo?.data} />
          {/* section 3 */}
          <SectionThree  data={sectionThree.data}/>
          {/* section 4 */}
          <SectionFour data={sectionFour.data} />
          {/* section 5 */}
          <SectionFive data={sectionFive.data} />
          {/* {section 6} */}
          <SectionSix data={sectionSix.data} />
          {/* {section 7} */}
          <SectionSeven />
          {/* {section 8} */}
          <SectionEight data={sectionFAQ.data} />
          {/* {section 9} */}
          <SectionNine data={sectionBlog.data} />
          {/* {section 10} */}
          <SectionTen />
        </div>
      )}
    </>
  );
};
export default Page;
