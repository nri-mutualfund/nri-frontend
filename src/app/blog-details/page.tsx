"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getBlogById, getSectionBlog } from "../api/api";
import moment from "moment";
import { BlogPost } from "@/utility/type";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Might be null initially

  const { data: currentData, isLoading } = useQuery({
    queryKey: ["blogByID)"],
    queryFn: () => getBlogById(id),
  });

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-auto xl:px-40 md:px-16 px-10">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {currentData?.blogCategory?.category_name}
              </span>
            </div>
            <h1 className="my-4 text-center ">{currentData?.blog_heading}</h1>
            <h4 className="my-4 text-center">
              Eligendi ipsa dolorem id non doloremque esse dicta hic at. Ab
              repellendus animi et fuga. Aut qui explicabo asperiores.
            </h4>
            <div className="flex justify-center gap-4 items-center my-4">
              <h5 className="font-medium">
                <span className="absolute inset-0" />
                {currentData?.user_name}
              </h5>
              <p className="text-text_light text-sm">
                {moment(currentData?.created_at).format("MMM DD, YYYY")}
              </p>
            </div>
            <div className="py-10">
              <div
                dangerouslySetInnerHTML={{ __html: currentData?.richText }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
