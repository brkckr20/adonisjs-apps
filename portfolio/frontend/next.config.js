/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wpriverthemes.com",
                port: '',
                pathname: '/',
            }
        ]
    }
}

module.exports = nextConfig
