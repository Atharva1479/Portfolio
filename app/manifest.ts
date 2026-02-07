import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Atharva Jamdar Portfolio',
        short_name: 'Atharva Jamdar',
        description: 'Portfolio of Atharva Jamdar, AI Engineer & Full Stack Developer',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
