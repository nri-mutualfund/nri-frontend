'use client'
import OTPInput from "@/components/OTPInput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import nProgress from "nprogress";
import { changePassword } from "../api";

interface CustomError extends Error {
  response?: {
    data?: {
      data?: string;
    };
  };
}
const Verify = () => {
  const router = useRouter();
  const params = useParams();
  const { transId } = params;
  console.log(transId, 'kjhjklkjh')
  const [otp, setOTP] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | boolean>(false); // Adjust error state to handle strings

  const { mutate } = useMutation({
    mutationKey: ['changePassword'],
    mutationFn: changePassword,
    onSuccess: (data) => {
      console.log(data, 'data');
      if(data.statusCode === 200){
      nProgress.start();
      router.push(`/signin`);
      }else{
        setError(true);
      }
    },
    onError: (error:CustomError) => {
      if (error?.response?.data?.data === 'Email not found') {
        setError(true);
      }
    },
  });
  const handleOTPChange = (otpValue: string) => {
    setOTP(otpValue);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ transId, otp, newPassword: password });
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 w-auto mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center font-bold leading-9 tracking-tight">
            Change Password
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="otp"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                OTP
              </label>
              <div className="mt-2">
                <OTPInput
                  length={6}
                  onChange={handleOTPChange}
                  hasError={false}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <div className="mt-2 text-center text-red-500">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                // disabled={isLoading}
              >
               Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
