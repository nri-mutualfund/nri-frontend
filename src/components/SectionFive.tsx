import React from "react";
import Image from "next/image";
import { TbAntennaBars5 } from "react-icons/tb";
import { PiShootingStarThin } from "react-icons/pi";
import {DataProps} from "../utility/type"
interface SectionOneProps {
  data: DataProps;
}
const SectionFive = ({ data }: SectionOneProps) => {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-gray-800 mx-auto  font-medium  leading-[40px]">
          {data?.pre_heading}
          <span className="text-primary">{data?.highlightned}</span>{" "}
          {data?.post_heading}
        </h2>
        <p className="font-light text-sm mt-1 text-center">{data?.detail}</p>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-14 mx-auto mt-10">
        <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
          <div className="flex flex-row items-center justify-between pl-12 pr-6 pt-10">
            <div className="flex justify-start">
              <p className="text-2xl font-medium mt-2 ">{data?.title_one}</p>
            </div>
            <Image
              src="/assets/tax.png"
              alt="Your Image Alt Text"
              className="w-[50px] "
              width={500}
              height={1}
            />
          </div>
          <div className=" pl-12 pr-20 pb-12">
            {data?.content_one?.map((item, index) => (
              <div key={index} className="flex items-start mt-4 relative">
                <div className="w-10 absolute left-0">
                 {index%2===0? <PiShootingStarThin size={20} color="gray" />:  <TbAntennaBars5 size={22} color="gray" />}
                </div>
                <p className=" text-sm text-gray-500 ml-10">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white drop-shadow-lg rounded-[20px]">
          <div className="flex flex-row items-center justify-between pl-12 pr-6 pt-10">
            {/* <Image
            src="/assets/doc.png"
            alt="Your Image Alt Text"
            className=" md:hidden w-[100px] flex items-center"
            width={400}
            height={1}
          /> */}
            <div className="flex justify-start">
              <p className="text-2xl font-medium mt-2">{data?.title_two}</p>
            </div>
            <Image
              src="/assets/doc.png"
              alt="Your Image Alt Text"
              className="w-[50px] "
              width={500}
              height={1}
            />
          </div>

          <div className=" pl-12 pr-20 pb-12">
          {data?.content_two?.map((item, index) => (
              <div key={index} className={`flex items-start ${index!==0&&index!==5?"mt-8":"mt-4"} relative`}>
                <div className="w-10 absolute left-0">
                 {index%2===0? <PiShootingStarThin size={20} color="gray" />:  <TbAntennaBars5 size={22} color="gray" />}
                </div>
                <p className=" text-sm text-gray-500 ml-10">{item}</p>
                <br />
              </div>
            ))}
            {/* <div className="flex items-start mt-4 relative">
              <div className="w-10 absolute left-0">
                <PiShootingStarThin size={20} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                Apply for a new <span className="text-black">PAN </span>
                digitally
              </p>
              <br />
            </div>
            <div className="flex items-start mt-8 relative">
              <div className="w-10 absolute left-0">
                <TbAntennaBars5 size={22} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                Update/ correct &{" "}
                <span className="text-black">Link Aadhaar</span>
              </p>
              <br />
            </div>
            <div className="flex items-start mt-8 relative">
              <div className="w-10 absolute left-0">
                <PiShootingStarThin size={25} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                Reprint <span className="text-black">PAN Card</span> (Lost/
                Damaged)
              </p>
              <br />
            </div>
            <div className="flex items-start mt-8 relative">
              <div className="w-10 absolute left-0">
                <TbAntennaBars5 size={22} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                Quick issuance with a streamlined digital process
              </p>
            </div>
            <div className="flex items-start mt-4 relative">
              <div className="w-10 absolute left-0">
                <PiShootingStarThin size={20} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                Seamless Pan card delivery to your doorstep -{" "}
                <span className="text-black">Anywhere, Anytime, Worldwide</span>
              </p>
            </div>
            <div className="flex items-start mt-4 relative">
              <div className="w-10 absolute left-0">
                <TbAntennaBars5 size={25} color="gray" />
              </div>
              <p className=" text-sm text-gray-500 ml-10">
                For inquiries & assistance, our 24/7 chat support team is at
                your service
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
