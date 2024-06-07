"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createUser } from "./api";
import { toast } from "react-toastify";
import NProgress from "nprogress";

interface CustomError extends Error {
  response?: {
    data?: {
      data?: string;
    };
  };
}
const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nameProp = searchParams.get("name");
  const emailProp = searchParams.get("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
    const newData = {
      email: email,
      verificationCode: data.code,
      password: data.password,
      first_name: name,
    };
    mutate(newData);
  };
  const { data, isSuccess, mutate, isError } = useMutation({
    mutationKey: ["verify"],
    mutationFn: createUser,
    onSuccess: (data) => {
      NProgress.start();
      router.push("verify-pan");
      localStorage.setItem("token", data?.accessToken);
    },
    onError: (error: CustomError) => {
      if (error?.response?.data?.data === "Incorrect verification code!") {
        setError(true);
      } else {
        toast(error?.response?.data?.data);
      }
    },
  });

  useEffect(() => {
    if (nameProp) {
      setName(nameProp);
    }
    if (emailProp) {
      setEmail(emailProp);
    }
  }, []);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 w-auto mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
          <p className="mt-4  text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  value={name}
                  disabled
                  // onChange={(e) => setName(e.target.value)}
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
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  disabled
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Please enter verification code sent to your email
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  type="code"
                  autoComplete="code"
                  minLength={6}
                  maxLength={6}
                  onChange={() => {
                    setError(false);
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  Incorrect verification code!
                </p>
              )}
            </div>
            {/* <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
              <div>
                <label htmlFor="code-1" className="sr-only">
                  First code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-next="code-2"
                  id="code-1"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-2" className="sr-only">
                  Second code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev={"code-1"}
                  data-focus-input-next={"code-3"}
                  id="code-2"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-3" className="sr-only">
                  Third code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev="code-2"
                  data-focus-input-next="code-4"
                  id="code-3"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-4" className="sr-only">
                  Fourth code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev="code-3"
                  data-focus-input-next="code-5"
                  id="code-4"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-5" className="sr-only">
                  Fifth code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev="code-4"
                  data-focus-input-next="code-6"
                  id="code-5"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-6" className="sr-only">
                  Sixth code
                </label>
                <input
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev="code-5"
                  id="code-6"
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div> */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
