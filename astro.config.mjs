// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Roboto Slab",
                cssVariable: "--font-roboto-slab"
            },
            {
                provider: fontProviders.google(),
                name: "Great Vibes",
                cssVariable: "--font-great-vibes"
            },
        ]
    }
});
