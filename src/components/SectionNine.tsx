import { BlogPost, DataProps } from "@/utility/type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NProgress from "nprogress";
import nProgress from "nprogress";

interface SectionOneProps {
  data: DataProps;
}
const SectionNine = ({ data }: SectionOneProps) => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <section className="bg-secondary px-8 md:px-20 lg:px-40 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-center">
          {data?.pre_heading}{" "}
          <span className="text-text_dark">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h1>
        <h5 className="mt-4 mb-4">{data?.detail}</h5>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-x-6 gap-y-12">
        {data?.data?.slice(0, 3)?.map((post, index: number) => (
          <article key={index} className="flex max-w-xl flex-col items-center">
            <div className="flex w-full gap-2 items-center">
              <p className="text-text_light text-sm">
                {moment(post?.created_at).format("MMM DD, YYYY")}
              </p>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {post?.blogCategory?.category_name}
              </span>
            </div>
            <div className="group relative">
              <Link
                href={{
                  pathname: "/blog-details",
                  query: { id: post?.id },
                }}
                className="flex text-primary items-center gap-2"
                onClick={() => {
                  NProgress.start();
                }}
              >
                <h3 className="mt-3 mb-2 hover:text-primary line-clamp-2">
                  <span className="absolute inset-0" />
                  {post.blog_heading}
                </h3>
              </Link>
              <div className=" h-full overflow-hidden relative mt-4">
                <div
                  className="line-clamp-6 text-text_light text-[14px]"
                  dangerouslySetInnerHTML={{ __html: post?.richText }}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-6">
              <h5 className="font-medium">{post?.user_name}</h5>
            </div>
            {index !== 2 && (
              <div className="border  w-full mt-6 block md:hidden" />
            )}
          </article>
        ))}
      </div>

      <div className=" flex justify-center items-center w-full py-10">
        <Link
          href={"/blog"}
          onClick={() => {
            NProgress.start();
          }}
        >
          <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectionNine;
