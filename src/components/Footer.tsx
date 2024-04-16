import React from "react";
import { FiBarChart } from "react-icons/fi";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full bg-secondary mt-40">
      <div className="py-6 lg:px-40 md:px-16 px-10">
        <div className="w-full flex flex-wrap items-center gap-20 md:gap-10 lg:gap-0 justify-between mt-20">
          <div className="w-full md:w-[45%] lg:w-[25%] px-4">
            <FiBarChart size={30} className="rotate-180" />
            <p className="font-extralight text-sm mt-6">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
          </div>
          <div className="w-full md:w-[45%] lg:w-[30%] px-4">
            <p className="font-extralight text-sm mt-6">
              {`Subscribe to stay tuned for new web design and latest updates.
              Let's do it!`}
            </p>
            <div className="flex justify-center mt-6">
              <div className="bg-gray-100 flex justify-between rounded-lg mt-3 w-full  pl-4 pr-2 py-2">
                <input
                  className="bg-transparent text-black placeholder-black outline-none w-full"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  {" "}
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[35%] px-4 flex justify-start lg:justify-end">
            <div className=" w-full flex flex-col md:flex-row flex-wrap gap-8 justify-between">
              <div>
                <p className="font-semibold">Follow us</p>
                <div className="flex gap-4 mt-6">
                  <div className="text-white bg-primary rounded-full text-4xl flex justify-center h-12 w-12 items-center font-light cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <BsInstagram size={24} />
                  </div>
                  <div className="text-white bg-primary rounded-full text-4xl flex justify-center h-12 w-12 items-center font-light cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <FaFacebookSquare size={24} />
                  </div>
                  <div className="text-white bg-primary rounded-full text-4xl flex justify-center h-12 w-12 items-center font-light cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <BsTwitterX size={24} />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-6">Call us</p>
                <Link href={"/"} className="text-sm cursor-pointer">
                  +91 9876543210
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-20" />
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-between mt-10">
          <div>
            <Link href={"/"} className="text-sm font-light">
              © 2021 All Rights Reserved
            </Link>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap  gap-4 md:gap-8">
            <Link href={"/"} className="text-sm font-light">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-sm font-light">
              Terms of Use
            </Link>
            <Link href={"/"} className="text-sm font-light">
              Sales and Refunds
            </Link>
            <Link href={"/"} className="text-sm font-light">
              Legal
            </Link>
            <Link href={"/"} className="text-sm font-light">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
