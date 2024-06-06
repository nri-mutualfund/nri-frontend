"use client";
import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import NProgress styles
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
interface ConditionalWrapperProps {
  routeName: string[];
  children: React.ReactNode;
}
const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  routeName,
  children,
}) => {
  const currentRoute = usePathname();
  let searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    // handleStop();

    return () => {
      // handleStart();
      handleStop();
    };
  }, [currentRoute, searchParams]);
  return routeName.includes(currentRoute) ? (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  ) : (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default ConditionalWrapper;
