"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import React from "react";
import { signIn } from "./api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const router = useRouter();
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["key1"],
    mutationFn: signIn,
    onSuccess:(data)=>{
        router.push("verify-pan");
        localStorage.setItem("token",data?.token)
    },
    onError:(error)=>{
        console.log("error",error)
        alert("user unauthorized!")
    }
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    mutate(data);
  };
  return (
    <>
      <div className="w-100% flex">
        <div className="flex w-5/12 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
              alt="Your Company"
            />
            <h2 className="mt-10 text-start font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-4  text-sm text-gray-600">
              Not a member?{" "}
              <a
                href="/signup"
                className="font-semibold leading-6 text-primary hover:text-green-600"
              >
                SignUp
              </a>
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
          </div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <hr className=" border-[#e1e1e1] border-[.5px] w-1/5" />
            <p>Or continue with</p>
            <hr className=" border-[#e1e1e1] border-[.5px] w-1/5" />
          </div>
          <div className="flex justify-center mt-6">
            <GoogleAuthButton />
          </div>
          <div></div>
        </div>

        {/* img */}
        <div className="w-7/12 h-screen lg:block hidden">
          <img
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
            className="w-full h-full"
            alt="wfdasdsa"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
