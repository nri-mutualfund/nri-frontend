import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white px-4 md:px-20 lg:px-40">
      <BsCheckCircle size={150} />
      <h2 className="md:max-w-[60%] text-center mt-14 text-gray-800 font-medium  leading-[45px]">
        Your Profile is created Complete your KYC to start investing.
      </h2>
    </div>
  );
};

export default page;
