import('next').NextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '9.react.pages.academy',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
}
