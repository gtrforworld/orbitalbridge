/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // webpack: (config) => {
    //     config.resolve.fallback = {fs: false, net:false, tls: false};
    //     config.externals.push("pino-pretty", "lokijs", "encoding");
    // }

    async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
