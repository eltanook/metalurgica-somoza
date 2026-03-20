/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enabled by default to allow resizing and format optimization (WebP/AVIF)
  },
}

export default nextConfig
