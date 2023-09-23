/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    let modularizeImports = null;
    config.module.rules.some((rule) =>
      rule.oneOf?.some((oneOf) => {
        modularizeImports = oneOf?.use?.options?.nextConfig?.modularizeImports;
        return modularizeImports;
      })
    );
    if (modularizeImports?.['@headlessui/react'])
      delete modularizeImports['@headlessui/react'];
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
  },
};

module.exports = nextConfig;
