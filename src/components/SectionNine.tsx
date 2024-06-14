import { DataProps } from "@/utility/type";
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
    <section className="bg-secondary px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <h1 className="text-center">
        {data?.pre_heading}{" "}
        <span className="text-text_dark">{data?.highlightned}</span>{" "}
        {data?.post_heading}
      </h1>
      <p className="mt-4 mb-4">{data?.detail}</p>
      {data?.data?.length && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-8 mt-20 items-center">
          <div className="">
            <p className="font-light text-sm text-text_light">
              {moment(data?.data[0]?.created_at).format("MMM DD, YYYY")}
            </p>
            <Link
              href={{
                pathname: "/blog-details",
                query: { id: data?.data[0]?.id },
              }}
              onClick={() => {
                nProgress.start();
              }}
            >
              <h3 className="mt-2 mb-2 ">{data?.data[0]?.blog_heading}</h3>
            </Link>

            <div className="h-full overflow-hidden relative">
              <div
                className="line-clamp-6 "
                dangerouslySetInnerHTML={{ __html: data?.data[0]?.richText }}
              />
            </div>
            <Link
              href={{
                pathname: "/blog-details",
                query: { id: data?.data[0]?.id },
              }}
              onClick={() => {
                nProgress.start();
              }}
            >
              <button className="flex items-center gap-2 text-primary mt-6">
                <p>Continue reading</p>
                <FaArrowRight />
              </button>
            </Link>

            <div className="border-[0.5px] mt-8 hidden lg:block" />
            <div className="flex items-center gap-4 mt-6">
              <h4 className="">{data?.data[0]?.user_name}</h4>
            </div>
            <div className="border-[0.5px] mt-8 block lg:hidden" />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-light text-sm text-text_light">
                {moment(data?.data[1]?.created_at).format("MMM DD, YYYY")}
              </p>
              <Link
                href={{
                  pathname: "/blog-details",
                  query: { id: data?.data[1]?.id },
                }}
                onClick={() => {
                  nProgress.start();
                }}
              >
                <h3 className="mt-2 mb-2">{data?.data[1]?.blog_heading}</h3>
              </Link>
              <div className="h-full overflow-hidden relative">
                <div
                  className="line-clamp-5 "
                  dangerouslySetInnerHTML={{ __html: data?.data[0]?.richText }}
                />
              </div>
              <div className="flex items-center gap-4 mt-6">
                {/* <Image
                  src={"/assets/male.png"}
                  alt="cots"
                  className="w-[30px]"
                  width={500}
                  height={1}
                /> */}
                <h5>{data?.data[1]?.user_name}</h5>
              </div>
            </div>
            <div className="border-[0.5px]" />
            <div>
              <p className="font-light text-sm text-text_light">
                {moment(data?.data[2]?.created_at).format("MMM DD, YYYY")}
              </p>
              <Link
                href={{
                  pathname: "/blog-details",
                  query: { id: data?.data[2]?.id },
                }}
                onClick={() => {
                  nProgress.start();
                }}
              >
                <h3 className="mt-2 mb-2">{data?.data[2]?.blog_heading}</h3>
              </Link>
              <div className="h-full overflow-hidden relative">
                <div
                  className="line-clamp-5 "
                  dangerouslySetInnerHTML={{ __html: data?.data[2]?.richText }}
                />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <h5>{data?.data[2]?.user_name}</h5>
              </div>
            </div>
          </div>
        </div>
      )}

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
