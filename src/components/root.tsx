"use client";
import React, { Suspense, useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    const handleStop = () => NProgress.done();
    // handleStop();
    NProgress.configure({ showSpinner: false });
    return () => {
      // handleStart();
      handleStop();
    };
  }, [currentRoute]);
  return (
    <QueryClientProvider client={queryClient}>
      {routeName.includes(currentRoute) ? (
        <Suspense
          fallback={
            <section className="h-screen flex justify-center items-center">
              <div className="flex items-center justify-center h-screen">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[ #00965A] animate-spin"></div>
                </div>
              </div>
            </section>
          }
        >
          {children}
        </Suspense>
      ) : (
        <>
          <Header />
          <Suspense
            fallback={
              <section className="h-screen flex justify-center items-center">
                <div className="flex items-center justify-center h-screen">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[ #00965A] animate-spin"></div>
                  </div>
                </div>
              </section>
            }
          >
            {children}
          </Suspense>

          <Footer />
        </>
      )}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ConditionalWrapper;
