/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withVideos(nextConfig);
