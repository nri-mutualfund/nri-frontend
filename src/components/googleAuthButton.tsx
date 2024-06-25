"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoogleAuthButton = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const googleRedirectUri = process.env.GOOGLE_REDIRECT_URI;
    const googleAuthState = process.env.GOOGLE_AUTH_STATE;
console.log(googleClientId, googleRedirectUri, googleAuthState, 'checkinggg')
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&scope=email%20profile&state=${googleAuthState}`;
    router.push(googleAuthUrl);
  };

  return (
        <div className="flex w-full justify-center gap-2 rounded-md bg-white border-solid border-gray-300 border-[1px] px-3 py-1.5 cursor-pointer" onClick={() => handleSignIn()}>
      <img src="/assets/Google.png" width={30} alt="" />
      <button
        className="   leading-6 text-black shadow-sm "
      >
        {" "} 
        Google
      </button>
    </div>
  );
};

export default GoogleAuthButton;
