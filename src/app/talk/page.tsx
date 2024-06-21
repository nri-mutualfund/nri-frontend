"use client";
import dynamic from "next/dynamic";
import React from "react";

const CalendlyWidget = dynamic(() => import("../../components/Calendally"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <section className="py-14 md:py-24 xl:px-40 md:px-16 px-4">
        <CalendlyWidget />
      </section>
    </>
  );
};

export default Page;
