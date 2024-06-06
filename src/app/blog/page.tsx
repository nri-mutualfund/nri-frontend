"use client";
import Link from "next/link";
import React from "react";
import { RxArrowRight } from "react-icons/rx";
import NProgress from "nprogress";
import { useQuery } from "@tanstack/react-query";
import { getSectionBlog } from "../api/api";
import moment from "moment";
import { BlogPost } from "@/utility/type";
const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: getSectionBlog,
  });

  return (
    <>
      {isLoading ? (
        <section className="h-screen flex justify-center items-center">
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#008000] animate-spin"></div>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-white sm:pt-4 pb-12">
          <div className="max-w-screen-2xl mx-auto py-6 xl:px-40 md:px-16 px-10">
            <h2 className="text-gray-800 mx-auto font-medium text-center  leading-[40px]">
              <span className="text-primary">Resource Center</span>
            </h2>
            <p className="font-extralight mt-1 text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing fermentum ante
              eu dignissim pulvinar.
            </p>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-28">
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
      )}
    </>
  );
};

export default Page;
