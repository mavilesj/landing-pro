const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  serverExternalPackages: ['sanity', '@sanity/ui', '@sanity/vision'],
  webpack: (config) => {
    // Mock react/compiler-runtime (React Compiler, React 19 feature)
    config.resolve.alias['react/compiler-runtime'] =
      path.resolve(__dirname, 'lib/react-compiler-runtime.js')

    // Sanity imports `useEffectEvent` from React via ESM named import.
    // Webpack's static export analysis can't detect it from React's
    // conditional CJS re-export. Downgrade the check from error to warn.
    config.module.parser = {
      ...config.module.parser,
      javascript: {
        ...(config.module.parser?.javascript || {}),
        exportsPresence: 'warn',
      },
    }

    return config
  },
}

module.exports = nextConfig
