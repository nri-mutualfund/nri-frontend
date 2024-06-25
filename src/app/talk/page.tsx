"use client";
import dynamic from "next/dynamic";
import React from "react";
const CalendlyWidget = dynamic(() => import("../../components/Calendally"), {
  ssr: false,
});
const Page = () => {
  return (
    <>
      <section className="py-10 md:py-14 xl:px-14 md:px-16 px-4">
        <CalendlyWidget />
      </section>
    </>
  );
};
export default Page;