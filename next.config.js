/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        //port: '',
        //pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        //port: '',
        pathname: '/avatar/**',
      },
    ],
  },
};

module.exports = nextConfig;
