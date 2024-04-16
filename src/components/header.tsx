"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full  text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
      <div className="w-full flex items-start justify-between py-6 lg:px-40 md:px-16 px-10">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          Logo
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base">
          <Link href={"/"}>
            {/* <Image src={Logo} width={70} alt="logo" /> */}
          </Link>
          <ul className="gap-12 md:flex hidden">
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Join the Community
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Blog
            </Link>
          </ul>
        </nav>
        <div className="items-center h-full md:block hidden">
          <button className="px-4 py-2 text-sm font-bold text-white  transition-all duration-300 bg-primary rounded-md shadow active:bg-primary  focus:outline-none ease cursor-pointer hover:shadow-lg hover:-translate-y-1">
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleNav}>
          {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={
            isMenuOpen
              ? "fixed top-0 left-0 w-[300px] bg-white lg:hidden h-screen p-10 ease-in-out duration-1000 z-50"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <Link href={"/"} onClick={handleNav}>
            {/* <Image src={Logo} width={70} alt="logo" /> */}
          </Link>
          <ul className="flex flex-col gap-10 my-10">
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Join the Community
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer font-lato hover:text-gray-900"
            >
              Blog
            </Link>
          </ul>
          <div className="items-center">
            <button className="px-4 py-2 text-sm font-bold text-white  transition-all duration-150 bg-primary rounded-md shadow active:bg-primary hover:shadow-md focus:outline-none ease">
              Sign Up For Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
