"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./Footer";

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
    <>{children}</>
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ConditionalWrapper;
