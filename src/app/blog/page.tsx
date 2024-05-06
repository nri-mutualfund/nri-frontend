import ImageSlider from "@/components/ImageSlider";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <div className="container mx-auto py-8">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Page;
