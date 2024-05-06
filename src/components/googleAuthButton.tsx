'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const GoogleAuthButton = () => {
    const router = useRouter();
    const handleSignIn = async() => {
        // Replace 'YOUR_GOOGLE_CLIENT_ID' and 'YOUR_REDIRECT_URI' with actual values
        const googleClientId = process.env.GOOGLE_CLIENT_ID;
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=http://localhost:5000/v1.0/auth/oauth/google&scope=email%20profile&state=http://localhost:3000/success`;
            console.log(googleAuthUrl, 'googleAuthUrlgoogleAuthUrl')
        // Redirect user to Google's authorization endpoint
        // router.push(googleAuthUrl);
        router.push(googleAuthUrl);

    };
    
  return (
    <div className='flex w-3/4 justify-center gap-8 rounded-md bg-white border-solid border-gray-300 border-[1px] px-3 py-1.5 '>
      <img src="/assets/Google.png" width={30} alt="" />
        <button  onClick={()=>handleSignIn()} className="text-lg  leading-6 text-black shadow-sm ">  Continue with Google</button>
    </div>
  )
}

export default GoogleAuthButton