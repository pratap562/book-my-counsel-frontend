/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// }

// module.exports = {
//     pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }



module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://book-my-counsel-rcdr.onrender.com/:path*"
      }
    ];
  };
  return {
    rewrites
  };
}

