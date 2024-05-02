import ImageSlider from "@/components/ImageSlider";
import React from "react";

const Page = () => {
  const images = [
    "/assets/long-term-wealth.png",
    "/assets/long-term-wealth.png",
    "/assets/long-term-wealth.png",
    "/assets/long-term-wealth.png",
    "/assets/long-term-wealth.png",
    "/assets/long-term-wealth.png",
  ];

  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <div className="container mx-auto py-8">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default Page;
