"use client";
import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import NProgress styles
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
    const handleStop = () => NProgress.done();
    // handleStop();
    NProgress.configure({ showSpinner: false });
    return () => {
      // handleStart();
      handleStop();
    };
  }, [currentRoute, searchParams]);
  return (
    <QueryClientProvider client={queryClient}>
      {routeName.includes(currentRoute) ? (
        children
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ConditionalWrapper;
