"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./Footer";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
