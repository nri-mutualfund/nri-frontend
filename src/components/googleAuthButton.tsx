"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoogleAuthButton = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    // Replace 'YOUR_GOOGLE_CLIENT_ID' and 'YOUR_REDIRECT_URI' with actual values
    const googleClientId = '623164060170-vapn304ccckpdbr1lupnk8tjn16g2uo3.apps.googleusercontent.com';
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=https://nriapi.shlokaconcepts.com/v1.0/auth/oauth/google&scope=email%20profile&state=https://nri-frontend.vercel.app/verify-pan`;
    console.log(googleAuthUrl, "googleAuthUrlgoogleAuthUrl");
    // Redirect user to Google's authorization endpoint
    // router.push(googleAuthUrl);
    router.push(googleAuthUrl);
  };

  return (
    <div className="flex w-full justify-center gap-2 rounded-md bg-white border-solid border-gray-300 border-[1px] px-3 py-1.5 ">
    <div className="flex w-full justify-center gap-2 rounded-md bg-white border-solid border-gray-300 border-[1px] px-3 py-1.5 ">
      <img src="/assets/Google.png" width={30} alt="" />
      <button
        onClick={() => handleSignIn()}
        className="   leading-6 text-black shadow-sm "
      >
        {" "} 
        Google
      </button>
      <button
        onClick={() => handleSignIn()}
        className="   leading-6 text-black shadow-sm "
      >
        {" "} 
        Google
      </button>
    </div>
  );
};
  );
};

export default GoogleAuthButton;

export default GoogleAuthButton;
