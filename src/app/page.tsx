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
import {
  getMoneySectionData,
  getReachSectionData,
  getSectionBlog,
  getSectionFAQ,
  getSectionFive,
  getSectionFour,
  getSectionOne,
  getSectionSix,
  getSectionThree,
  getSectionTwo,
} from "./api/api";
import Section11 from "@/components/Section11";
import Section12 from "@/components/Section12";
const Page = () => {
  const { data, isLoading, status, isSuccess } = useQuery({
    queryKey: ["banner"],
    queryFn: getSectionOne,
  });
  const sectionTwo = useQuery({
    queryKey: ["funds"],
    queryFn: getSectionTwo,
  });
  const sectionThree = useQuery({
    queryKey: ["products"],
    queryFn: getSectionThree,
  });
  const sectionFour = useQuery({
    queryKey: ["bank"],
    queryFn: getSectionFour,
  });
  const sectionFive = useQuery({
    queryKey: ["documents"],
    queryFn: getSectionFive,
  });
  const sectionSix = useQuery({
    queryKey: ["testomonial"],
    queryFn: getSectionSix,
  });
  const sectionFAQ = useQuery({
    queryKey: ["faq"],
    queryFn: () => getSectionFAQ(1),
  });
  const sectionBlog = useQuery({
    queryKey: ["blog"],
    queryFn: () => getSectionBlog(1, "All"),
  });
  const moneySection = useQuery({
    queryKey: ["moneySection"],
    queryFn: () => getMoneySectionData(),
  });
  const reactSection = useQuery({
    queryKey: ["reactSection"],
    queryFn: () => getReachSectionData(),
  });
  const checkLoading = () => {
    return (
      isLoading &&
      sectionTwo?.isLoading &&
      sectionThree?.isLoading &&
      sectionFour?.isLoading &&
      sectionFive?.isLoading &&
      sectionSix?.isLoading &&
      sectionFAQ?.isLoading &&
      moneySection?.isLoading &&
      reactSection?.isLoading &&
      sectionBlog?.isLoading
    );
  };
  return (
    <>
      {checkLoading() ? (
        <section className="h-screen flex justify-center items-center">
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[ #00965A] animate-spin"></div>
            </div>
          </div>
        </section>
      ) : (
        <div className="max-w-screen-2xl mx-auto">
          {/* sectin 1 */}
          <SectionOne data={data} />
          {/* section 2 */}
          <SectionTwo data={sectionTwo?.data} />
          {/* section 3 */}
          <SectionThree data={sectionThree.data} />
          {/* section 4 */}
          <SectionFour data={sectionFour.data} />
          {/* section 5 */}
          <SectionFive data={sectionFive.data} />
          {/* {section 6} */}
          <SectionSix data={sectionSix.data} />
          {/* {section 7} */}
          <SectionSeven data={moneySection.data}/>
          {/* {section 8} */}
          <SectionEight data={sectionFAQ?.data?.data} />
          {/* {section 9} */}
          <SectionNine data={sectionBlog?.data} />
          {/* Section11 */}
          <Section11 data={reactSection?.data} />
          {/* Section 12 */}
          <Section12 />
          {/* {section 10} */}
          <SectionTen />
        </div>
      )}
    </>
  );
};
export default Page;
