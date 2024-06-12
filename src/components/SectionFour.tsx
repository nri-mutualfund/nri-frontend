import { DataProps } from "@/utility/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

interface SectionOneProps {
  data: DataProps;
}
const SectionFour = ({ data }: SectionOneProps) => {
  const [showArrow, setShowArrow] = useState(false);
  const router = useRouter();
  return (
    <section className=" px-4 md:px-20 lg:px-40  py-14 md:py-24 bg-secondary">
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 mt-4 lg:grid-cols-2 items-center">
        <div className="w-full">
          <h1 className="max-w-80">
            {data?.pre_heading}{" "}
            <span className="text-text_dark">{data?.highlightned}</span>{" "}
            {data?.post_heading}
          </h1>
          <h5 className="mt-4 mb-4">{data?.detail}</h5>
          <div className="flex flex-wrap gap-2">
            <div className="flex  items-start mt-10">
              <button
                onClick={() => {
                  router.push("/banking");
                  nProgress.start();
                }}
                className="px-8  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                Create Account
              </button>
            </div>
            <button
              className="flex gap-4  px-6 items-center mt-10 py-2 rounded-md bg-white border border-primary text-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              onMouseEnter={() => {
                setShowArrow(true);
              }}
              onMouseLeave={() => {
                setShowArrow(false);
              }}
            >
              Contact us
              {showArrow && <GoArrowRight size={20} color="#008000" />}
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 items-center">
            <div className="w-full">
              <Image
                src="/assets/AXIS_LOGO2.png"
                alt="Your Image Alt Text"
                className="w-[180px]"
                width={500}
                height={1}
              />
            </div>
            <div className="w-full">
              <Image
                src="/assets/IDFC_LOGO2.png"
                alt="Your Image Alt Text"
                className="w-[180px]"
                width={500}
                height={1}
              />
            </div>
            <div className="w-full">
              <Image
                src="/assets/ICICI_LOGO2.png"
                alt="Your Image Alt Text"
                className="w-[180px] pb-[30px]"
                width={500}
                height={1}
              />
            </div>
            <div className="w-full">
              <Image
                src="/assets/HDFC_LOGO2.png"
                alt="Your Image Alt Text"
                className="w-[180px]"
                width={500}
                height={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
