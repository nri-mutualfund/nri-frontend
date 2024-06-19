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
    const handleRouteChangeStart = () => {
      NProgress.start();
    };
    const handleRouteChangeDone = () => {
      NProgress.done();
    };

    handleRouteChangeStart();
    NProgress.configure({ showSpinner: false });
    handleRouteChangeDone();

    return () => {
      handleRouteChangeDone();
    };
  }, [currentRoute]);

  const matchRoute = (path: string, pattern: string) => {
    const regex = new RegExp(`^${pattern.replace(/:\w+/g, "[^/]+")}$`);
    return regex.test(path);
  };

  const shouldWrap = routeName.some((pattern) => matchRoute(currentRoute, pattern));
  console.log('Current Route:', currentRoute);
  console.log('Route Match:', routeName.some((pattern) => matchRoute(currentRoute, pattern)));
  const fallbackLoader = (
    <section className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#008000] animate-spin"></div>
        </div>
      </div>
    </section>
  );

  return (
    <QueryClientProvider client={queryClient}>
      {shouldWrap ? (
        <Suspense fallback={fallbackLoader}>
          {children}
        </Suspense>
      ) : (
        <>
          <Header />
          <Suspense fallback={fallbackLoader}>
            {children}
          </Suspense>
          <Footer />
        </>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ConditionalWrapper;
