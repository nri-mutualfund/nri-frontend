import GoogleAuthButton from "@/components/googleAuthButton";
import Image from "next/image";
import React from "react";
interface SignInProps {
  toggleForm: () => void; // Assuming toggleForm is a function that takes no arguments and returns void
}

const SignUp: React.FC<SignInProps> = ({ toggleForm }: SignInProps) => {
  return (
    <>
<<<<<<< HEAD
      <div className="flex ">
        <div className="relative w-1/2 signIn rounded-l-lg">
          <Image
            src="/assets/signup.png"
            alt="l,m,."
            layout="responsive"
            width={700}
            height={300}
            className="rounded-l-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t rounded-l-lg from-transparent to-black opacity-88  text-white flex flex-col justify-center items-center">
            <h1 className="text-[61px] pl-8 ">
              A one-stop
              <span className="text-primary font-semibold">Indian</span> Expats
            </h1>
            <p className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
              mollis aenean sit dictum tincidunt.
            </p>
=======
    <div className='flex '  >
    <div className="relative w-1/2 signIn rounded-l-lg">
  <Image src="/assets/signup.png" alt="l,m,." layout="responsive" width={700} height={300}  className='rounded-l-lg'/>
  <div className="absolute inset-0 bg-gradient-to-t rounded-l-lg from-transparent to-black opacity-88  text-white flex flex-col justify-center items-center" >
    <h1 className='text-[61px] pl-8 '>A one-stop
        <span className='text-primary font-semibold'>Indian</span> Expats
    </h1>
    <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt.</p>
    </div>
</div>

    <div className='w-1/2 bg-white rounded-l-xl rounded-r-lg flex justify-center items-center signUp'>
      <div className='w-full flex flex-col items-center pt-10 gap-4'>
      <div className='bg-gray-300 text-black flex justify-center w-14'>LOGO</div>
    <GoogleAuthButton />
    <div>
    <hr className="h-px my-8 border-[#a2a2a2] border-[1.5px] w-[300px]" />
    </div>
    <div className='w-3/4'>
            <div className="flex items-center justify-between">
              <label  className="block text-md font-medium leading-6 text-gray-900">Your <span className='text-primary'>Name</span></label>
              
            </div>
            <div className="mt-2 w-full">
              <input id="name" name="name" type="name" placeholder='Name' required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6" />
            </div>
>>>>>>> 0cfd8c35cf357f05560dfe9da942ff53b773d764
          </div>
        </div>

        <div className="w-1/2 bg-white rounded-l-xl rounded-r-lg flex justify-center items-center signUp">
          <div className="w-full flex flex-col items-center pt-10 gap-8">
            <div className="bg-gray-300 text-black flex justify-center w-14">
              LOGO
            </div>
<<<<<<< HEAD
            <GoogleAuthButton />
            <h3>or</h3>

            <div className="w-3/4">
              <div className="flex items-center justify-between">
                <label className="block text-md font-medium leading-6 text-gray-900">
                  Your <span className="text-primary">Name</span>
                </label>
=======
          </div>
    
          
    
         
          
          <div className="text-md pt-10">
                <a href="#" className="font-semibold text-black">Already have an account? <span className='text-primary' onClick={toggleForm}>Sign in</span></a>
>>>>>>> 0cfd8c35cf357f05560dfe9da942ff53b773d764
              </div>
              <div className="mt-2 w-full">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            <div className="w-3/4">
              <label className="block text-md font-medium leading-6 text-gray-900">
                Your <span className="text-primary">Email</span> address
              </label>
              <div className="mt-2 w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            <div className="text-md pt-20">
              <a href="#" className="font-semibold text-black">
                Already have an account?{" "}
                <span className="text-primary" onClick={toggleForm}>
                  Sign in
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
