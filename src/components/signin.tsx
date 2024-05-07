import GoogleAuthButton from "@/components/googleAuthButton";
import Image from "next/image";
import React from "react";

interface SignInProps {
  toggleForm: () => void; // Assuming toggleForm is a function that takes no arguments and returns void
}

const SignIn: React.FC<SignInProps> = ({ toggleForm }: SignInProps) => {
  return (
    <>
<div className='flex '>
<div className='w-1/2 bg-white rounded-r-lg rounded-l-lg flex justify-center items-center signIn'  >
  <div className='w-full flex flex-col items-center pt-10 gap-4'>
  <div className='bg-gray-300 text-black flex justify-center w-14 p-2 px-32 mb-10'>LOGO</div>
<GoogleAuthButton />
<div>
    <hr className="h-px my-8 border-[#a2a2a2] border-[1.5px] w-[300px]" />
    </div>
 <div className='w-3/4'>
        <label  className="block text-md font-medium leading-6 text-gray-900">Your <span className='text-primary'>Email</span> address</label>
        <div className="mt-2 w-full">
          <input id="email" name="email" type="email" placeholder='Email address' required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6" />
        </div>
      </div>

            <div className="w-3/4">
              <div className="flex items-center justify-between">
                <label className="block text-md font-medium leading-6 text-gray-900">
                  Your <span className="text-primary">Password</span>
                </label>
              </div>
              <div className="mt-2 w-full">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm ">Sign in</button>
      </div>
      <div className="text-md">
            <a href="#" className="font-semibold text-black ">Forgot password?</a>
          </div>
      <div className="text-md">
            <a href="#" className="font-semibold text-black ">Don{`'`}t? have an account? <span className='text-primary' onClick={toggleForm}>Sign up</span></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
