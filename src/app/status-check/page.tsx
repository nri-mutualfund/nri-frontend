"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getInvestorProfileDetails, getProfileDetails } from "../profile/api";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

const Page = () => {
  const router = useRouter();
  const { data, status } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });
  if (status === "success") {
    // router.push("/profile");

    if (data?.stage === "kyc") {
      nProgress.start();
      router.push("/verify-pan");
    } else if (data?.stage === "settings") {
        nProgress.start();
        router.push("/settings");
    } else if (data?.stage === "investor_profile") {
      if (profileData?.country_of_birth) {
        nProgress.start();
        router.push("/investor-profile");
      } else if (profileData?.hand_signature_media) {
        nProgress.start();
        router.push("/income-details");
      } else {
        nProgress.start();
        router.push("/profile");
      }
    } else if (data?.stage === "bank") {
      nProgress.start();
      router.push("/bank-details");
    } else if (data?.stage === "nominee") {
      nProgress.start();
      router.push("/nominee-details");
    } else if (data?.stage === "ready") {
      nProgress.start();
      router.push("/finish");
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
