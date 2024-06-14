"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createUser } from "./api";
import { toast } from "react-toastify";
import NProgress from "nprogress";
import OTPInput from "@/components/OTPInput";

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
  const [error2, setError2] = useState(false);
  const [code, setCode] = useState("");
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (code?.length < 6) {
      setError2(true);
    } else {
      console.log("data", data);
      const newData = {
        email: email,
        verificationCode: code,
        password: data.password,
        first_name: name,
      };
      console.log("data", data, newData);
      mutate(newData);
    }
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
  useEffect(() => {
    setError2(false);
  }, [code]);
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="h-10 w-auto mx-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
              alt="Your Company"
            />
            <h1 className="mt-10 text-center font-bold leading-9 ">
              Create an account
            </h1>
            <h4 className="mt-4 text-center">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold leading-6 text-primary hover:text-green-600"
              >
                Sign In
              </Link>
            </h4>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
            <form className="space-y-6 text-text_dark" onSubmit={submit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium leading-6 text-text_dark"
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
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    disabled
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="code"
                  className="block text-xs font-medium leading-6 text-text_dark"
                >
                  Please enter verification code sent to your email
                </label>
              </div>
              <div className="">
                <OTPInput length={6} onChange={(e) => setCode(e)} />
                {error && (
                  <p className="text-red-500 text-xs mt-2">
                    Incorrect verification code!
                  </p>
                )}
                {error2 && (
                  <p className="text-red-500 text-xs mt-2">
                    {code?.length > 0
                      ? "verification code should be in 6 digit!"
                      : "This field is required!"}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium leading-6 text-text_dark"
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
                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
      </div>
    </>
  );
};

export default Page;
