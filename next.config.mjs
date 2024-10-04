/** @type {import('next').NextConfig} */
const nextConfig = {};

import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform({
        // all the conent of databse will persist to db, otherwise when we start dev server it will purge.
        persist: true,
    })
}

export default nextConfig;
