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
      destination: "http://localhost:3200/:path*"
    },
  ];
};

module.exports = {
  ...nextConfig,
  async rewrites() {
    return rewriteRules();
  },
};

