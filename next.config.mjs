/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "casa-feliz-mls-staging-20300b3ee1db.herokuapp.com",
        // port: "*",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
