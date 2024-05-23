import type { Metadata } from "next";
import "./globals.css";
import ConditionalWrapper from "@/components/root";


export const metadata: Metadata = {
  title: "NRI",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,500&display=swap"
          rel="stylesheet"
        />
      <body style={{ fontFamily: "'Inter', serif"}}>
        <ConditionalWrapper routeName={["/signup", "/signin", "/verify"]}>
          {children}</ConditionalWrapper>
      </body>
    </html>
  );
}
