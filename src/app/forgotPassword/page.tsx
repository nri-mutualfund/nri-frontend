"use client"
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';
import React, { useState } from 'react';
import { forgotPassword } from './api';

interface CustomError extends Error {
  response?: {
    data?: {
      data?: string;
    };
  };
}

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const { mutate } = useMutation({
    mutationKey: ['forgotPassword'],
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      nProgress.start();
      router.push(`/forgotPassword/${data?.transactionId}`);
    },
    onError: (error: CustomError) => {
      if (error?.response?.data?.data === 'Email not found') {
        setError(true);
      }
    },
  });

  const VerifyEmailForOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
        console.log(email, 'email')
      mutate(email);
    } else {
      setError(true);
    }
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
            Forgot Password
          </h1>
          <h4 className="mt-4 text-center">
            Not a member?{' '}
            <a
              href="/signup"
              className="font-semibold leading-6 text-primary hover:text-green-600"
            >
              Sign Up
            </a>
          </h4>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" onSubmit={VerifyEmailForOtp}>
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
                  type="email"
                  onChange={handleEmailChange}
                  autoComplete="email"
                  required
                  className={`px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ${!isValidEmail ? 'border-1 ring-red-500 text-red-500 focus:ring-inset focus:ring-red-500' : 'ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary'} sm:text-sm sm:leading-6`}
                />
              </div>
              {error && (
            <div className="mt-2 text-center text-red-500">
              {isValidEmail ? 'Email not found!' : 'Invalid email address'}
            </div>
          )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Otp
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
