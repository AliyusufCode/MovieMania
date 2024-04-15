/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "kinomore.netlify.app",
        protocol: "https",
      },
      {
        hostname: "i.pinimg.com",
        protocol: "https",
      },
      {
        hostname: "avatars.mds.yandex.net",
        protocol: "https",
      },
      {
        hostname: "wl-adme.cf.tsp.li",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
