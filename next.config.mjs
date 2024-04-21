/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'store.istad.co',
                port:'',
                pathname:'/media/*',
            },
        ],
    },
};

export default nextConfig;
