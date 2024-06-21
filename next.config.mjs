/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
      GOOGLE_AUTH_STATE: process.env.GOOGLE_AUTH_STATE,
    },
  };
  
  export default nextConfig;
  