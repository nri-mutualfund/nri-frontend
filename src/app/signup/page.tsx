"use client";
import React from "react";
import GoogleAuthButton from "@/components/googleAuthButton";
import Link from "next/link";
import { useState } from "react";
import { RxArrowRight, RxCross2 } from "react-icons/rx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyEmail } from "./api";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = e.target.value;
    setIsValidEmail(emailRegex.test(newEmail));
    setEmail(newEmail);
  };
  const queryParams = { name: name, email: email };
  const queryString = new URLSearchParams(queryParams).toString();
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["key1"],
    mutationFn: () => verifyEmail(email),
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
  if (isSuccess) {
    router.push(`verify?${queryString}`);
  }
  return (
    <>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white px-4 py-10 rounded-sm drop-shadow-2xl">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div> */}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
            alt="Your Company"
          />
          <h2 className="mt-10 text-start font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
          <p className="mt-4  text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              SignIn
            </a>
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-sm md:drop-shadow-lg">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
            </div>
            {/* <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Sign Up
                                </button>
                            </div> */}
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
