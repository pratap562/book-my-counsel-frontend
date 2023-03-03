/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

// module.exports = {
//     pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }

const rewriteRules = () => {
  return [
    {
      source: "/api/:path*",
      destination: "https://book-my-counsel-rcdr.onrender.com/:path*"
    },
  ];
};

module.exports = {
  ...nextConfig,
  async rewrites() {
    return rewriteRules();
  },
};

