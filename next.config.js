/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { appDir: true },
    env: {
        BACKEND_URL: "http://localhost:8080",
        KIBANA_URL: "http://localhost:5601"
    }
}

module.exports = nextConfig
