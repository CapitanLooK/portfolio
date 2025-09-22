/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            "img-src 'self' data: https:",
                            "connect-src 'self' https://static.cloudflareinsights.com",
                            "frame-src 'none'",
                            "object-src 'none'",
                            "base-uri 'self'"
                        ].join('; ')
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    }
                ]
            }
        ];
    },

    swcMinify: true,
    compress: true,

    images: {
        domains: ['alejandromaure.com.ar'],
        formats: ['image/webp', 'image/avif'],
    },

    eslint: {
        ignoreDuringBuilds: false,
    },

    typescript: {
        ignoreBuildErrors: false,
    }
};

export default nextConfig;
