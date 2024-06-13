"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import React, { useState } from "react";
import { signIn } from "./api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import nProgress from "nprogress";
interface CustomError extends Error {
  response?: {
    data?: {
      data?: string;
    };
  };
}
const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["sigin"],
    mutationFn: signIn,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/status-check");
      localStorage.setItem("token", data?.token);
    },
    onError: (error: CustomError) => {
      setError(true);
    },
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    mutate(data);
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
          <h1 className="mt-10 text-center font-bold leading-9 tracking-tight">
            Sign in to your account
          </h1>
          <h4 className="mt-4 text-center">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              Sign Up
            </a>
          </h4>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // type="email"
                  onChange={() => {
                    setError(false);
                  }}
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
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
                  onChange={() => {
                    setError(false);
                  }}
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  Invalid email or password!
                </p>
              )}
              <div className="flex items-center justify-between pt-5">
                <label className="block text-gray-600 ">
                  <input
                    className="ml-2 leading-tight w-3 h-3"
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  <span className="text-sm">&nbsp; &nbsp; Remember me</span>
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-green-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in
              </button>
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

        <div></div>
      </div>
    </>
  );
};

export default SignIn;
