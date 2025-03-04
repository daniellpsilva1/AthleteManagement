/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Validate environment variables during build
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Validate environment variables on the server build
      // Note: This won't stop the build, but it will log warnings
      // The actual validation will happen at runtime
      import('./lib/env.js')
        .then(({ validateEnv }) => {
          try {
            validateEnv();
            console.log('✅ Environment variables validated successfully!');
          } catch (error) {
            console.warn('⚠️ Environment validation warning:', error.message);
          }
        })
        .catch((error) => {
          console.warn('⚠️ Could not validate environment variables:', error.message);
        });
    }
    return config;
  },
}

export default nextConfig;
