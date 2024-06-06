"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProfileDetails } from "../profile/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { data, status } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  if (status === "success") {
    // router.push("/profile");

    if (data?.stage === "kyc") {
      router.push("/verify-pan");
    } else if (data?.stage === "investor_profile") {
      router.push("/profile");
    }
  }
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

export default Page;
