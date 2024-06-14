"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import NProgress from "nprogress";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full  text-gray-700 bg-white border-t body-font sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-6 xl:px-40 md:px-16 px-10">
        {/* <Image
          src="/assets/122.png"
          alt="Your Image Alt Text"
          className="w-[200px] absolute top-0 left-0"
          width={500}
          height={1}
        /> */}

        <nav className="flex items-center text-base gap-8 ">
          <Link
            href={"/"}
            className={`cursor-pointer hover:text-primary text-[16px] ${
              pathname === "/" ? "text-primary" : "text-[#424242]"
            }`}
            onClick={() => {
              if (pathname !== "/") {
                NProgress.start();
              }
            }}
          >
            {/* <Image src={Logo} width={70} alt="logo" /> */}
            Logo
          </Link>
          <ul className="gap-8 lg:flex items-center hidden">
            <Link
              href={"/"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/") {
                  NProgress.start();
                }
              }}
            >
              Home
            </Link>
            <Link
              href={"/banking"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/banking" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/banking") {
                  NProgress.start();
                }
              }}
            >
              Banking
            </Link>
            <Link
              href={"/join-the-community"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/join-the-community"
                  ? "text-primary"
                  : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/join-the-community") {
                  NProgress.start();
                }
              }}
            >
              Community
            </Link>
            <Link
              href={"/partner-with-us"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/partner-with-us"
                  ? "text-primary"
                  : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/partner-with-us") {
                  NProgress.start();
                }
              }}
            >
              Partner with Us
            </Link>
            <Link
              href={"/blog"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/blog" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/blog") {
                  NProgress.start();
                }
              }}
            >
              Resource
            </Link>
            <Link
              href={"/faq"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/faq" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                if (pathname !== "/faq") {
                  NProgress.start();
                }
              }}
            >
              FAQ
            </Link>
          </ul>
        </nav>
        <div className="items-center lg:flex hidden gap-12">
          {/* <Link
            href={"/login"}
            className="cursor-pointer hover:text-primary text-[16px] "
          >
            Sign in
          </Link> */}
          <Link
            href={"/signup"}
            onClick={() => {
              if (pathname !== "/signup") {
                NProgress.start();
              }
            }}
          >
            <button className="px-4 py-2 text-white  transition-all duration-300 bg-primary rounded-md shadow active:bg-primary  focus:outline-none ease cursor-pointer hover:shadow-lg hover:-translate-y-1">
              <span>Sign Up For Free</span>
            </button>
          </Link>
        </div>

        <div className="items-center flex gap-8 lg:hidden" onClick={handleNav}>
          <Link
            href={"/signup"}
            onClick={() => {
              if (pathname !== "/signup") {
                NProgress.start();
              }
            }}
          >
            <button className="px-4 py-2   font-medium text-white  transition-all duration-300 bg-primary rounded-md shadow active:bg-primary  focus:outline-none ease cursor-pointer hover:shadow-lg hover:-translate-y-1">
              Sign Up For Free
            </button>
          </Link>
          {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={
            isMenuOpen
              ? "fixed top-0 left-0 w-[300px] bg-white lg:hidden h-screen p-10 ease-in-out duration-1000 z-50"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-1000"
          }
        >
          <Link
            href={"/"}
            onClick={() => {
              handleNav();
              if (pathname !== "/") {
                NProgress.start();
              }
            }}
          >
            <Image
              src="/assets/122.png"
              alt="Your Image Alt Text"
              className="w-[200px] absolute top-0 left-0"
              width={500}
              height={1}
            />

            <p className="flex items-center mb-4 font-medium text-[#424242] title-font md:mb-0 absolute left-10 ">
              Logo
            </p>
          </Link>
          <ul className="flex flex-col gap-10 my-32">
            <Link
              href={"/"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/") {
                  NProgress.start();
                }
              }}
            >
              Home
            </Link>
            <Link
              href={"/banking"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/banking" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/banking") {
                  NProgress.start();
                }
              }}
            >
              Banking
            </Link>
            <Link
              href={"/join-the-community"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/join-the-community"
                  ? "text-primary"
                  : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/join-the-community") {
                  NProgress.start();
                }
              }}
            >
              Community
            </Link>
            <Link
              href={"/partner-with-us"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/partner-with-us"
                  ? "text-primary"
                  : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/partner-with-us") {
                  NProgress.start();
                }
              }}
            >
              Partner with Us
            </Link>
            <Link
              href={"/blog"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/blog" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/blog") {
                  NProgress.start();
                }
              }}
            >
              Resource
            </Link>
            <Link
              href={"/faq"}
              className={`cursor-pointer hover:text-primary text-[16px] ${
                pathname === "/faq" ? "text-primary" : "text-[#424242]"
              }`}
              onClick={() => {
                handleNav();
                if (pathname !== "/faq") {
                  NProgress.start();
                }
              }}
            >
              FAQ
            </Link>
          </ul>

          {/* <div className="items-center">
            <Link href={"/login"}>
              <button className="px-4 py-2   font-bold text-white  transition-all duration-150 bg-primary rounded-md shadow active:bg-primary hover:shadow-md focus:outline-none ease">
                Sign Up For Free
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
