module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vbstrapidevstorage.blob.core.windows.net',
        port: '',
        pathname: '/strapi-uploads/assets/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/public/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rentcafe.com',
        port: '',
        pathname: '/dmslivecafe/**',
      }
    ]
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  },
}
