import React from "react";

const Loader = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#008000] animate-spin"></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
