"use client";
import React from "react";
import GoogleAuthButton from "@/components/googleAuthButton";
import Link from "next/link";
import { useState } from "react";
import { RxArrowRight, RxCross2 } from "react-icons/rx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyEmail } from "./api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import NProgress from "nprogress";
interface CustomError extends Error {
  response?: {
    data?: {
      data?: string;
    };
  };
}
const SignUp = () => {
  const router = useRouter();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = e.target.value;
    setIsValidEmail(emailRegex.test(newEmail));
    setEmail(newEmail);
    setError(false);
  };
  const queryParams = { name: name, email: email };
  const queryString = new URLSearchParams(queryParams).toString();
  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: () => verifyEmail({ email: email }),
    onSuccess: () => {
      NProgress.start();
      router.push(`verify?${queryString}`);
    },
    onError: (error: CustomError) => {
      console.log("error", error);
      if (error?.response?.data?.data === "Email already exists!!") {
        setError(true);
      } else {
        toast(error?.response?.data?.data);
      }
    },
  });
  const VerifyEmailForOtp = () => {
    // Enable fetching on button click
    try {
      mutate();
    } catch (error) {
      console.error("Error prefetching verification data:", error);
      // Handle errors appropriately
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 w-auto mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
            alt="Your Company"
          />
          <h1 className="mt-10 font-bold leading-9 text-center">
            Create an account
          </h1>
          <h4 className="mt-4 text-center">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              Sign In
            </a>
          </h4>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="name"
                  placeholder="Name"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Your Email address
              </label>
              <div className=" mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  onChange={handleEmailChange}
                  value={email}
                  className={`px-2 block w-full rounded-md ${
                    error
                      ? "border-1 border-red-500 text-red-500"
                      : "border-0 text-text_dark"
                  } py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                  {isValidEmail && (
                    //   <Link href={`/verify?${queryString}`}>
                    <RxArrowRight
                      className="w-5 h-5 font-thin text-primary cursor-pointer "
                      onClick={VerifyEmailForOtp}
                    />
                    //   </Link>
                  )}
                  {!isValidEmail && email.length > 0 && (
                    <RxCross2 className="h-5 w-5 font-thin text-red-500" />
                  )}
                </span>
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  This email already exist!
                </p>
              )}
            </div>
          </form>
          <div className="flex justify-center items-center gap-4 mt-10">
            <hr className=" border-[#e1e1e1] border-[.5px] w-1/5" />
            <p>Or continue with</p>
            <hr className=" border-[#e1e1e1] border-[.5px] w-1/5" />
          </div>
          <div className="flex justify-center mt-6">
            <GoogleAuthButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
