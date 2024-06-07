"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import NProgress from "nprogress";
import { useQuery } from "@tanstack/react-query";
import { getSectionBlog } from "../api/api";
import moment from "moment";
import { BlogPost } from "@/utility/type";
import Loader from "@/components/Loader";
import CustomPagination from "@/components/CustomPagination";
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["blog", currentPage],
    queryFn: () => getSectionBlog(currentPage),
  });
  const cat = [
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
    "NRI Mutual Funds",
    "NRI Investment",
  ];
  return (
    <div className="max-w-screen-2xl ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white sm:pt-4 pb-12">
          <div className="mx-auto py-6 xl:px-40 md:px-16 px-10">
            <h2 className="text-gray-800 mx-auto font-medium text-center  leading-[40px] mt-6">
              {data?.pre_heading}{" "}
              <span className="text-primary">{data?.highlightned}</span>{" "}
              {data?.post_heading}
            </h2>
            <p className="font-extralight mt-1 text-sm text-center">
              {data?.detail}
            </p>
            <div className="flex gap-10">
              <div className="hidden md:block">
                <div className="w-[250px] xl:w-[280px] border shadow-sm rounded-lg mt-28 ">
                  <div className="p-4 border-b">
                    <p className="text-base font-bold">Categories</p>
                  </div>
                  <div className="p-4">
                    {cat?.map((item, index) => (
                      <p key={index} className="mb-4">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6 lg:mt-28">
                <select className="block md:hidden w-2/3 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6 ">
                  <option value={""}>Categories</option>
                  {cat.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                {data?.data?.map((post: BlogPost, index: number) => (
                  <article
                    key={index}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {post.blog_heading}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.blog_content}
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between mt-4">
                      <Link
                        href={{
                          pathname: "/blog-details",
                          query: { id: post?.id },
                        }}
                        className="flex text-primary items-center gap-2 "
                        onClick={() => {
                          NProgress.start();
                        }}
                      >
                        Learn More
                        <RxArrowRight />
                      </Link>
                      <p className="text-gray-500 text-sm">
                        {moment(post?.created_at).format("MMM DD, YYYY")}
                      </p>
                    </div>
                    <div className="relative mt-4 flex items-center gap-x-4 border-t border-gray-300 w-full py-4">
                      <img
                        src={
                          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />
                          {post?.user_name}
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10 mx-auto py-6 xl:px-40 md:px-16 px-10">
        <CustomPagination
          currentPage={currentPage}
          total={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Page;
