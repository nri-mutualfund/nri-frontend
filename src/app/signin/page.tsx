"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import React from "react";
import { signIn } from "./api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import nProgress from "nprogress";
const SignIn = () => {
  const router = useRouter();
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["sigin"],
    mutationFn: signIn,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/status-check");
      localStorage.setItem("token", data?.token);
    },
    onError: (error) => {
      console.log("error", error);
      toast("user unauthorized!");
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
          <h2 className="mt-10 text-center font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-4  text-sm text-gray-600 text-center">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" onSubmit={submit}>
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
                  // type="email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

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
